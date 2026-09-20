import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbbc_v-5y.css';
import '../../css/v/vvfyzqbfn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mbbc_v-5y"/><path class="vvfyzqbfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:log-out-rtl"} {...others} />);
}

export default Component;
