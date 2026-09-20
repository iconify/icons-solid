import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tb1h0rm8o.css';
import '../../css/a/acwejz0_o.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="tb1h0rm8o"/><path class="acwejz0_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hand-with-fingers-splayed"} {...others} />);
}

export default Component;
