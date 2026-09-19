import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/m/ms27-ub9z.css';
import '../../css/f/f86-bwprj.css';
import '../../css/c/czqk2mbmp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="ms27-ub9z"/><path class="f86-bwprj"/><path class="czqk2mbmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:vertically-centered"} {...others} />);
}

export default Component;
