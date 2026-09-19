import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/fq9tp7bbo.css';
import '../../css/b/bi74qk6aa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="fq9tp7bbo"/><path class="bi74qk6aa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:effects"} {...others} />);
}

export default Component;
