import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mt6snqu5h.css';
import '../../css/m/mbc2q3n8y.css';
import '../../css/p/ph59_n8kq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mt6snqu5h"/><path class="mbc2q3n8y"/><path class="ph59_n8kq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:shirt-sharp"} {...others} />);
}

export default Component;
