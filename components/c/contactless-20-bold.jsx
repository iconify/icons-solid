import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yzc_ai_da.css';
import '../../css/l/l0bdr-bzi.css';
import '../../css/m/mkc2s70sv.css';
import '../../css/h/hqzf0_0is.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yzc_ai_da"/><path class="l0bdr-bzi"/><path class="mkc2s70sv"/><path class="hqzf0_0is"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:contactless-20-bold"} {...others} />);
}

export default Component;
