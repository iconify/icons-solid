import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/je_mielcj.css';
import '../../css/v/vlq40abrs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="je_mielcj"/><path class="vlq40abrs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shipment-star"} {...others} />);
}

export default Component;
