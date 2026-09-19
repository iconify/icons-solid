import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n09tnb1bj.css';
import '../../css/e/ekil0t11d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n09tnb1bj"/><path class="ekil0t11d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:smile-plus"} {...others} />);
}

export default Component;
