import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z4i4hwbzo.css';
import '../../css/h/ht1chgbmf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z4i4hwbzo"/><path class="ht1chgbmf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shopping-basket-star"} {...others} />);
}

export default Component;
