import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/ifxv5jnsx.css';
import '../../css/m/mxbjiiwsl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><rect class="ifxv5jnsx"/><path class="mxbjiiwsl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:air-conditioning"} {...others} />);
}

export default Component;
