import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/oib7atbgf.css';
import '../../css/a/aoxssybqm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGyH3hlcdP"><g class="aql7dnt-u"><path class="oib7atbgf"/><path class="aoxssybqm"/></g></mask></defs><path mask="url(#SVGyH3hlcdP)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:phone-booth"} {...others} />);
}

export default Component;
