import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hb1scqbmo.css';
import '../../css/a/aqncqbc6o.css';
import '../../css/i/iomwkbcdi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hb1scqbmo"/><path class="aqncqbc6o"/><path class="iomwkbcdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:transformer-20"} {...others} />);
}

export default Component;
