import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wc2-dxbuv.css';
import '../../css/f/fjdyfn62r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wc2-dxbuv"/><path class="fjdyfn62r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-bag-time"} {...others} />);
}

export default Component;
