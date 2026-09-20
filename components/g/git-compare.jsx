import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdtk3xqjc.css';
import '../../css/m/mo5qvibyu.css';
import '../../css/f/fdbv05geg.css';
import '../../css/x/x783am7zp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tdtk3xqjc"/><path class="mo5qvibyu"/><path class="fdbv05geg"/><path class="x783am7zp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:git-compare"} {...others} />);
}

export default Component;
