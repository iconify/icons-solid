import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/ra6lu9bvl.css';
import '../../css/p/p5abvv-ay.css';
import '../../css/y/yok835bum.css';
import '../../css/v/v908osbqn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="ra6lu9bvl"/><path class="p5abvv-ay"/><path class="yok835bum"/><path class="v908osbqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:refresh-ccw"} {...others} />);
}

export default Component;
