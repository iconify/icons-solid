import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/a/a3egu4bnj.css';
import '../../css/k/k_94f0bqu.css';
import '../../css/z/zri7a6b5o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGagp6hcaK"><g class="v3_i3wktz"><path class="a3egu4bnj"/><path class="k_94f0bqu"/><path class="zri7a6b5o"/></g></mask></defs><path mask="url(#SVGagp6hcaK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:shake"} {...others} />);
}

export default Component;
