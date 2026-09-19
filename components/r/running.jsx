import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yuqww68ni.css';
import '../../css/n/nox6-37po.css';
import '../../css/e/eibz08bvf.css';
import '../../css/a/aqhegdzwt.css';
import '../../css/j/jj-j6lgeu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yuqww68ni"/><path class="nox6-37po"/><path clip-rule="evenodd" class="eibz08bvf"/><path class="aqhegdzwt"/><path class="jj-j6lgeu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:running"} {...others} />);
}

export default Component;
