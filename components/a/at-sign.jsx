import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/k/k4qczcbzs.css';
import '../../css/w/wt--vackk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="k4qczcbzs"/><path class="wt--vackk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:at-sign"} {...others} />);
}

export default Component;
