import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xl6e-cvow.css';
import '../../css/d/dclo4wbbt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xl6e-cvow"/><path class="dclo4wbbt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:eye-empty"} {...others} />);
}

export default Component;
