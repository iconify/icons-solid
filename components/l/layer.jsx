import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wnp_mvbpj.css';
import '../../css/f/f620otqdp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wnp_mvbpj"/><path class="f620otqdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:layer"} {...others} />);
}

export default Component;
