import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l5uzomw4p.css';
import '../../css/g/gsd0i4bir.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l5uzomw4p"/><path class="gsd0i4bir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:text-highlight"} {...others} />);
}

export default Component;
