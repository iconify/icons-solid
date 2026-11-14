import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/ko22q1b9a.css';
import '../../css/o/or9ywybpp.css';
import '../../css/h/hp_bkssfr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="ko22q1b9a"/><path class="or9ywybpp"/><path class="hp_bkssfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:idle-fee"} {...others} />);
}

export default Component;
