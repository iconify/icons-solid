import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/mf4kxbb7i.css';
import '../../css/d/d94-w3mcu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="mf4kxbb7i"/><circle class="d94-w3mcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:open-one"} {...others} />);
}

export default Component;
