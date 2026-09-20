import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gvgd1nkyi.css';
import '../../css/r/rukhn3j8j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gvgd1nkyi"/><path class="rukhn3j8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:origin-logo"} {...others} />);
}

export default Component;
