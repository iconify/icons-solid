import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s19aowben.css';
import '../../css/f/f6p-2g58b.css';
import '../../css/o/o8ymreppw.css';
import '../../css/h/hjhjwb4fd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="s19aowben"/><path class="f6p-2g58b"/><path class="o8ymreppw"/><path class="hjhjwb4fd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-arrow-up-minimalistic-line-duotone"} {...others} />);
}

export default Component;
