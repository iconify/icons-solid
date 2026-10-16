import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv842m9yr.css';
import '../../css/f/fl7bzqbcv.css';
import '../../css/n/nhkqt2bck.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yv842m9yr"/><path class="fl7bzqbcv"/><path class="nhkqt2bck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:library-20-bold"} {...others} />);
}

export default Component;
