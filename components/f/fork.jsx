import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/l/l3gq4rh3k.css';
import '../../css/p/pfos4ebhf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGaYjRbdkO"><g class="v3_i3wktz"><path class="l3gq4rh3k"/><path class="pfos4ebhf"/></g></mask></defs><path mask="url(#SVGaYjRbdkO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:fork"} {...others} />);
}

export default Component;
