import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/d/d9ti0tfzb.css';
import '../../css/y/ywx-y6bsq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG3ChUSdYG"><g class="v3_i3wktz"><path class="d9ti0tfzb"/><path class="ywx-y6bsq"/></g></mask></defs><path mask="url(#SVG3ChUSdYG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:selected-focus"} {...others} />);
}

export default Component;
