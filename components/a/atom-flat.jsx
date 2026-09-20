import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u7y9q90kx.css';
import '../../css/c/cc1v39bnv.css';
import '../../css/k/kvwxyvrwd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u7y9q90kx"/><path clip-rule="evenodd" class="cc1v39bnv"/><path class="kvwxyvrwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:atom-flat"} {...others} />);
}

export default Component;
