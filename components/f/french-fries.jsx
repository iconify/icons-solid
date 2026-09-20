import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kxu6yhfrp.css';
import '../../css/s/s-ot-mb-r.css';
import '../../css/y/y4g6yyk9q.css';
import '../../css/e/e3dqhwb8i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kxu6yhfrp"/><path class="s-ot-mb-r"/><path class="y4g6yyk9q"/><path class="e3dqhwb8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:french-fries"} {...others} />);
}

export default Component;
