import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tvv9gh6-y.css';
import '../../css/o/o5ma16brf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="tvv9gh6-y"/><path clip-rule="evenodd" class="o5ma16brf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:bitcoin-circle-1-flat"} {...others} />);
}

export default Component;
