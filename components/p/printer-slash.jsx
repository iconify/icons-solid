import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hvak45gtf.css';
import '../../css/m/m3w7a8b7o.css';
import '../../css/r/rsrhfac5n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hvak45gtf"/><path class="m3w7a8b7o"/><path class="rsrhfac5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:printer-slash"} {...others} />);
}

export default Component;
