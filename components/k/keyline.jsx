import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/i5hd2ab8w.css';
import '../../css/u/ujbxjmbjk.css';
import '../../css/a/a3tlaubzd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="i5hd2ab8w"/><path class="ujbxjmbjk"/><path class="a3tlaubzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:keyline"} {...others} />);
}

export default Component;
