import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/y/y_954pbno.css';
import '../../css/a/a_ux_9bkl.css';
import '../../css/k/kb9zbkb1z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="y_954pbno"/><path class="a_ux_9bkl"/><circle class="kb9zbkb1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:sphere"} {...others} />);
}

export default Component;
