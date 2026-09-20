import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/do9ouabki.css';
import '../../css/s/sdvjx-b-j.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/l/l8f-2szii.css';
import '../../css/b/bnvd08bmr.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="do9ouabki"/><path class="sdvjx-b-j"/><g class="x8poo_bjf"><path class="l8f-2szii"/><path class="bnvd08bmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:worm"} {...others} />);
}

export default Component;
