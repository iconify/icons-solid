import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jhdnizqyf.css';
import '../../css/k/k8jrf-bba.css';
import '../../css/r/rbhb6abqo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jhdnizqyf"/><rect transform="rotate(90 0 21.24)scale(-1 1)" class="k8jrf-bba"/><path class="rbhb6abqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:grid-four"} {...others} />);
}

export default Component;
