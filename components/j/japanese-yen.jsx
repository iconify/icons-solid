import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/oru91es3j.css';
import '../../css/f/fmvts2lan.css';
import '../../css/m/me1e4q2ye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="oru91es3j"/><path class="fmvts2lan"/><path class="me1e4q2ye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:japanese-yen"} {...others} />);
}

export default Component;
