import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k3eh5_bya.css';
import '../../css/x/xs25p1wij.css';
import '../../css/w/wd_9ef92d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k3eh5_bya"/><path class="xs25p1wij"/><path class="wd_9ef92d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:spatula"} {...others} />);
}

export default Component;
