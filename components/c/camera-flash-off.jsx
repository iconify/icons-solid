import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/u/ugqcf7rcn.css';
import '../../css/k/k69zopbyy.css';
import '../../css/c/c42668blu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="ugqcf7rcn"/><path class="k69zopbyy"/><path class="c42668blu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:camera-flash-off"} {...others} />);
}

export default Component;
