import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1gahrb8b.css';

const viewBox = {"width":24,"height":25};
const content = `<path clip-rule="evenodd" class="l1gahrb8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:remote-explorer"} {...others} />);
}

export default Component;
