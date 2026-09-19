import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wr6slzm6t.css';
import '../../css/f/fpth1bb7p.css';
import '../../css/e/ebjwlsagl.css';
import '../../css/v/vhcww73cv.css';

const viewBox = {"width":19,"height":32};
const content = `<g class="cuyn6tgcc"><path class="wr6slzm6t"/><path class="fpth1bb7p"/><circle class="ebjwlsagl"/><path class="vhcww73cv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:phone"} {...others} />);
}

export default Component;
