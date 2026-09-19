import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yw--e53oz.css';
import '../../css/e/eqyl0dx4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yw--e53oz"/><path class="eqyl0dx4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:accessibility-sign"} {...others} />);
}

export default Component;
