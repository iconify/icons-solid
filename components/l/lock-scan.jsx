import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c4t4q-ade.css';
import '../../css/k/kc8nueq9m.css';
import '../../css/a/ai4c3ehnh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c4t4q-ade"/><rect class="kc8nueq9m"/><path class="ai4c3ehnh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:lock-scan"} {...others} />);
}

export default Component;
