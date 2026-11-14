import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gxkg2nglx.css';
import '../../css/i/i20bt5bjj.css';
import '../../css/t/tqj-zy2in.css';
import '../../css/b/bm6komber.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gxkg2nglx"/><path class="i20bt5bjj"/><path class="tqj-zy2in"/><path class="bm6komber"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-vision-recognition"} {...others} />);
}

export default Component;
