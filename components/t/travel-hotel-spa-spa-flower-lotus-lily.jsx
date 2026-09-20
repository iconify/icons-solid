import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/r-g9tibbs.css';
import '../../css/b/b-3y8dbwi.css';
import '../../css/n/nsgiktbkq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="r-g9tibbs"/><path class="b-3y8dbwi"/><path class="nsgiktbkq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-hotel-spa-spa-flower-lotus-lily"} {...others} />);
}

export default Component;
