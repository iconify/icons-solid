import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/n/nzlchnb8z.css';
import '../../css/a/anp3g9bku.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="nzlchnb8z"/><path class="anp3g9bku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:floppy-disk"} {...others} />);
}

export default Component;
