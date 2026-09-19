import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hmqkr95yr.css';
import '../../css/c/cxgt2g6hf.css';
import '../../css/t/tiz7iu3-y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hmqkr95yr"/><path class="cxgt2g6hf"/><path class="tiz7iu3-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tree-07"} {...others} />);
}

export default Component;
