import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qv4ebs0bg.css';
import '../../css/h/h1lupabnl.css';
import '../../css/h/hgoqu4bte.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="qv4ebs0bg"/><path class="h1lupabnl"/><path class="hgoqu4bte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:logout"} {...others} />);
}

export default Component;
