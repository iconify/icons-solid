import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-oojb0nt.css';
import '../../css/z/zteynabyf.css';
import '../../css/n/ny1qcmb9i.css';
import '../../css/q/q5fmoobmy.css';
import '../../css/w/wrbws8b7q.css';

const viewBox = {"width":283.46,"height":42.71,"left":37.82,"top":42.71};
const content = `<path class="y-oojb0nt"/><linearGradient id="SVGB0o2JbYy" x1="37.822" x2="75.645" y1="66.136" y2="66.136" gradientUnits="userSpaceOnUse"><stop offset=".3" class="zteynabyf"/><stop offset=".701" class="ny1qcmb9i"/></linearGradient><path fill="url(#SVGB0o2JbYy)" class="q5fmoobmy"/><path class="wrbws8b7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:novartis"} {...others} />);
}

export default Component;
