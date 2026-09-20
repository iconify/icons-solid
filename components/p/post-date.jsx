import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gi87txbdj.css';
import '../../css/h/hdcm3gbmg.css';
import '../../css/y/ymly3jbab.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="gi87txbdj"/><path vector-effect="non-scaling-stroke" class="hdcm3gbmg"/><path vector-effect="non-scaling-stroke" class="ymly3jbab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:post-date"} {...others} />);
}

export default Component;
