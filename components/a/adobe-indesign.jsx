import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qy4pgcc_r.css';
import '../../css/u/u6e-1wbnb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qy4pgcc_r"/><path class="u6e-1wbnb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:adobe-indesign"} {...others} />);
}

export default Component;
