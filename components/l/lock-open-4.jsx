import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lhnkpeblb.css';
import '../../css/h/hsl5cssye.css';
import '../../css/o/osmj5yboo.css';
import '../../css/j/ja24kvs1e.css';
import '../../css/l/lfb-6qb6d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lhnkpeblb"/><path class="hsl5cssye"/><path class="osmj5yboo"/><path class="ja24kvs1e"/><path class="lfb-6qb6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:lock-open-4"} {...others} />);
}

export default Component;
