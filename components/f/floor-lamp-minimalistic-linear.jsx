import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ick8o1b-y.css';
import '../../css/g/g40jultif.css';
import '../../css/j/j9k_jgbfh.css';
import '../../css/n/no9-lkimx.css';
import '../../css/y/y6dum9mni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ick8o1b-y"/><path class="g40jultif"/><path class="j9k_jgbfh"/><path class="no9-lkimx"/><path class="y6dum9mni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:floor-lamp-minimalistic-linear"} {...others} />);
}

export default Component;
