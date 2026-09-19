import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/ai9gsubow.css';
import '../../css/w/w3iaqtbfj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ai9gsubow"/><path class="w3iaqtbfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:chef-hat"} {...others} />);
}

export default Component;
