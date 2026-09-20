import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-l74qbar.css';
import '../../css/d/dbix9sbci.css';
import '../../css/u/ur7kcdbqf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y-l74qbar"/><path class="dbix9sbci"/><path class="ur7kcdbqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:lighthouse"} {...others} />);
}

export default Component;
