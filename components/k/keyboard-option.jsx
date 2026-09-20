import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8hgfh8lo.css';
import '../../css/a/a6zy-8bqo.css';
import '../../css/e/ed5ti7b7r.css';
import '../../css/t/tzi9o_b0o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k8hgfh8lo"/><path class="a6zy-8bqo"/><path class="ed5ti7b7r"/><path class="tzi9o_b0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:keyboard-option"} {...others} />);
}

export default Component;
