import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/f/fw4qprb3o.css';
import '../../css/f/fd-er-bup.css';
import '../../css/j/j160kwbfi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="fw4qprb3o"/><path class="fd-er-bup"/><circle transform="rotate(25 12.083 36.688)" class="j160kwbfi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:google-ads"} {...others} />);
}

export default Component;
