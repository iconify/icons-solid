import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/e/ej_-f0c3i.css';
import '../../css/c/cn2o6vbhk.css';
import '../../css/q/qooi5yfzo.css';
import '../../css/m/mftarekup.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="ej_-f0c3i"/><path class="cn2o6vbhk"/><path class="qooi5yfzo"/><path class="mftarekup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:paint-palette"} {...others} />);
}

export default Component;
