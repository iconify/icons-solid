import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hr5_er4wf.css';
import '../../css/g/gss0_xq1l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="hr5_er4wf"/><path class="gss0_xq1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:location"} {...others} />);
}

export default Component;
