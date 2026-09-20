import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/f/fmidmjb6y.css';
import '../../css/g/g0j5f0vrs.css';
import '../../css/b/b2_7pvbbm.css';
import '../../css/r/raaj8abjd.css';

const viewBox = {"width":42,"height":42,"top":-1};
const content = `<g class="umm606kxf"><path class="fmidmjb6y"/><path class="g0j5f0vrs"/><path class="b2_7pvbbm"/><path class="raaj8abjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:control"} {...others} />);
}

export default Component;
