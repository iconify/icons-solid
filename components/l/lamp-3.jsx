import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/f6tqcpbyl.css';
import '../../css/b/buv-ombri.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="f6tqcpbyl"/><path class="buv-ombri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:lamp-3"} {...others} />);
}

export default Component;
