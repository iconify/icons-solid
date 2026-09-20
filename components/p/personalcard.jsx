import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oqla-2jpp.css';
import '../../css/s/sduqpc76e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="oqla-2jpp"/><path class="sduqpc76e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:personalcard"} {...others} />);
}

export default Component;
