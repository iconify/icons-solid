import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/a0fqrfixb.css';
import '../../css/c/cm-p35b0w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="a0fqrfixb"/><path class="cm-p35b0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:hourglass"} {...others} />);
}

export default Component;
