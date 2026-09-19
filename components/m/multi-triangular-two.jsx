import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/q-pan9bpu.css';
import '../../css/n/ni2kn61-e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGNj5d8daY"><g class="aql7dnt-u"><path class="q-pan9bpu"/><path class="ni2kn61-e"/></g></mask></defs><path mask="url(#SVGNj5d8daY)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:multi-triangular-two"} {...others} />);
}

export default Component;
