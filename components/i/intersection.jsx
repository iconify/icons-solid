import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/a8yau0s8m.css';
import '../../css/x/x9k21mbpj.css';
import '../../css/s/s_3ygitrk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="a8yau0s8m"/><path class="x9k21mbpj"/><rect class="s_3ygitrk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:intersection"} {...others} />);
}

export default Component;
