import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uzrshnbal.css';
import '../../css/u/ud7n-by6k.css';
import '../../css/k/k8c68e47n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uzrshnbal"/><path class="ud7n-by6k"/><path class="k8c68e47n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sticky-note"} {...others} />);
}

export default Component;
