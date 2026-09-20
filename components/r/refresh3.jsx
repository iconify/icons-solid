import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f6yld9bld.css';
import '../../css/t/tn71l2bxj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f6yld9bld"/><path class="tn71l2bxj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:refresh3"} {...others} />);
}

export default Component;
