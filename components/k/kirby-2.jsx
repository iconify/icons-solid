import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/j/jpxfh3bie.css';
import '../../css/x/xm1j_w9pv.css';
import '../../css/z/z61wglbot.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="jpxfh3bie"/><path class="xm1j_w9pv"/><path class="z61wglbot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:kirby-2"} {...others} />);
}

export default Component;
