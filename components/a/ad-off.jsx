import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qylfpj-0m.css';
import '../../css/y/yh8uttzef.css';
import '../../css/s/s43s198-h.css';
import '../../css/k/k91zaplvb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qylfpj-0m"/><path clip-rule="evenodd" class="yh8uttzef"/><path class="s43s198-h"/><path class="k91zaplvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ad-off"} {...others} />);
}

export default Component;
