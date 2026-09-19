import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qyk3l6bba.css';
import '../../css/z/zlayvnhvl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="qyk3l6bba"/><path class="zlayvnhvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:cup-one"} {...others} />);
}

export default Component;
