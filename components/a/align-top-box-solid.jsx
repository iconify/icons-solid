import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ov2f79ppf.css';
import '../../css/o/olt-_65_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ov2f79ppf"/><path class="olt-_65_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:align-top-box-solid"} {...others} />);
}

export default Component;
