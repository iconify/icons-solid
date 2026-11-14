import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lz_qbtbon.css';
import '../../css/u/u9ny4ybhz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lz_qbtbon"/><path class="u9ny4ybhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:save-money-pound"} {...others} />);
}

export default Component;
