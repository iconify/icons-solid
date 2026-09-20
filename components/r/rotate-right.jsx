import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/a/a7e7esbzb.css';
import '../../css/r/rfyx4ybpk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="a7e7esbzb"/><path class="rfyx4ybpk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:rotate-right"} {...others} />);
}

export default Component;
