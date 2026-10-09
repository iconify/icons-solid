import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/upfy9abxj.css';
import '../../css/m/m0wmagbew.css';
import '../../css/x/xaqkq-baz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="upfy9abxj"/><path class="m0wmagbew"/><path class="xaqkq-baz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:transformer-48-bold"} {...others} />);
}

export default Component;
