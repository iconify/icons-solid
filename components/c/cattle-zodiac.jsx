import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/l/l5ohr-bmh.css';
import '../../css/i/i2ktc1wqj.css';
import '../../css/d/di46qzpzr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="l5ohr-bmh"/><path class="i2ktc1wqj"/><path class="di46qzpzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cattle-zodiac"} {...others} />);
}

export default Component;
