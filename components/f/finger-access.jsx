import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/czd7etboj.css';
import '../../css/i/ihar8za-j.css';
import '../../css/d/dq9es6cpd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="czd7etboj"/><path class="ihar8za-j"/><path class="dq9es6cpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:finger-access"} {...others} />);
}

export default Component;
