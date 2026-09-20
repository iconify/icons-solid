import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7h54nblt.css';
import '../../css/y/yad7u38_l.css';

const viewBox = {"width":138,"height":136.1};
const content = `<path class="z7h54nblt"/><path class="yad7u38_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:infojobs"} {...others} />);
}

export default Component;
