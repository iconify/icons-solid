import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h_nk4118m.css';
import '../../css/q/qrw1gubvo.css';
import '../../css/g/g79mtgboy.css';
import '../../css/g/g4z6abbdr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h_nk4118m"/><path clip-rule="evenodd" class="qrw1gubvo"/><path class="g79mtgboy"/><path clip-rule="evenodd" class="g4z6abbdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pin-list-bold"} {...others} />);
}

export default Component;
