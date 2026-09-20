import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/g/gihz8l71i.css';
import '../../css/y/y5yt-wbzp.css';
import '../../css/j/j6_cfl97f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="gihz8l71i"/><path class="y5yt-wbzp"/><path class="j6_cfl97f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:synchronize-2"} {...others} />);
}

export default Component;
