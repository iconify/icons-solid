import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9sjl02ro.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/m/m3bbyvbqu.css';
import '../../css/p/ppf1pcc6t.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="r9sjl02ro"/><g class="kdz4acc8r"><path class="m3bbyvbqu"/><path class="ppf1pcc6t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:speaking-head"} {...others} />);
}

export default Component;
