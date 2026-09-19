import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/m/m9bikobno.css';
import '../../css/k/kb0q22bdl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><rect class="m9bikobno"/><path class="kb0q22bdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:announcement"} {...others} />);
}

export default Component;
