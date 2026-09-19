import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/vbdv-imkd.css';
import '../../css/n/nks455yhk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="vbdv-imkd"/><path class="nks455yhk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:descend"} {...others} />);
}

export default Component;
