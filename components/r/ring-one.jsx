import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/p/pdfpzmfej.css';
import '../../css/m/mfsd7w07b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="pdfpzmfej"/><path class="mfsd7w07b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:ring-one"} {...others} />);
}

export default Component;
