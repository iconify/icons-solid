import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/ufbcn_xbu.css';
import '../../css/i/i18zfbb0s.css';
import '../../css/j/j5_rsh35x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGhZSJPbNS"><g class="aql7dnt-u"><path class="ufbcn_xbu"/><path class="i18zfbb0s"/><path class="j5_rsh35x"/></g></mask></defs><path mask="url(#SVGhZSJPbNS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:sun-hat"} {...others} />);
}

export default Component;
