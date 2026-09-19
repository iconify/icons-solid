import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c02b__imu.css';
import '../../css/h/hntgybcog.css';
import '../../css/n/nfows2ock.css';
import '../../css/p/p9-zrkb4g.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGVndoHcZi" class="c02b__imu"/></defs><g class="hntgybcog"><path class="nfows2ock"/><path class="p9-zrkb4g"/><use href="#SVGVndoHcZi"/><use href="#SVGVndoHcZi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:emoji-sing-right"} {...others} />);
}

export default Component;
