import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vutvuxr2i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vutvuxr2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:delimiter"} {...others} />);
}

export default Component;
