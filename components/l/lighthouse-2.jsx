import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-l74qbar.css';
import '../../css/h/ho4576bki.css';
import '../../css/u/ur7kcdbqf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y-l74qbar"/><path class="ho4576bki"/><path class="ur7kcdbqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:lighthouse-2"} {...others} />);
}

export default Component;
