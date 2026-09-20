import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jugg-dbvr.css';
import '../../css/r/rf3rjbcgz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="jugg-dbvr"/><path class="rf3rjbcgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:document"} {...others} />);
}

export default Component;
