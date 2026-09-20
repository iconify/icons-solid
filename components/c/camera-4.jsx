import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/c/ch3-uebwe.css';
import '../../css/y/y_12t6qyt.css';
import '../../css/a/aimn5ubnz.css';
import '../../css/a/abhxg8bdt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="ch3-uebwe"/><path class="y_12t6qyt"/><path class="aimn5ubnz"/><path class="abhxg8bdt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:camera-4"} {...others} />);
}

export default Component;
