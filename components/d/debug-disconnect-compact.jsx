import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1zalobua.css';

const viewBox = {"width":12,"height":12};
const content = `<path clip-rule="evenodd" class="z1zalobua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:debug-disconnect-compact"} {...others} />);
}

export default Component;
