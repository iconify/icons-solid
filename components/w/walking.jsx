import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xka6v174v.css';
import '../../css/f/fvmx4acrj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xka6v174v"/><path class="fvmx4acrj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:walking"} {...others} />);
}

export default Component;
