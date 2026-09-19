import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/ooefdb7zl.css';
import '../../css/x/xe2fs9opk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ooefdb7zl"/><path class="xe2fs9opk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:banana"} {...others} />);
}

export default Component;
