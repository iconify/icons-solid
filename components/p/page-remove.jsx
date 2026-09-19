import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1xd35blt.css';
import '../../css/s/sou039b5u.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="f1xd35blt"/><path class="sou039b5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:page-remove"} {...others} />);
}

export default Component;
