import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dq_yi2-xa.css';
import '../../css/g/gusqowxtm.css';

const viewBox = {"width":1000,"height":1000};
const content = `<path class="dq_yi2-xa"/><path class="gusqowxtm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:css-new"} {...others} />);
}

export default Component;
