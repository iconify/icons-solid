import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/y/ycfmajb5u.css';
import '../../css/j/jp36w24ae.css';
import '../../css/a/aa7k_sbzz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGXFzjkeVk"><g class="v3_i3wktz"><path class="ycfmajb5u"/><path class="jp36w24ae"/><path class="aa7k_sbzz"/></g></mask></defs><path mask="url(#SVGXFzjkeVk)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:broadcast-radio"} {...others} />);
}

export default Component;
