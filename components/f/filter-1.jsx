import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/y/y1ao49biz.css';
import '../../css/x/xxujgqzbg.css';
import '../../css/p/pyx8jgb6o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="y1ao49biz"/><path class="xxujgqzbg"/><path class="pyx8jgb6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:filter-1"} {...others} />);
}

export default Component;
