import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qt1es7b7z.css';
import '../../css/v/v56p69bqh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="qt1es7b7z"/><path class="v56p69bqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:landing"} {...others} />);
}

export default Component;
