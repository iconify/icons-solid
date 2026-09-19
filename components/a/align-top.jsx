import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/jaf5_5_-y.css';
import '../../css/y/y7o7wybuc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG3euSodfK"><g class="v3_i3wktz"><path class="jaf5_5_-y"/><path class="y7o7wybuc"/></g></mask></defs><path mask="url(#SVG3euSodfK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:align-top"} {...others} />);
}

export default Component;
