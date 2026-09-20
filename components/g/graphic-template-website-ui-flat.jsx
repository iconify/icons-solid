import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7tyw9bke.css';
import '../../css/t/t4uxzyb1q.css';
import '../../css/k/ki7n34ear.css';
import '../../css/o/o_2uyyfmb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="m7tyw9bke"/><path class="t4uxzyb1q"/><path class="ki7n34ear"/><path clip-rule="evenodd" class="o_2uyyfmb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:graphic-template-website-ui-flat"} {...others} />);
}

export default Component;
