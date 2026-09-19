import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/i/i4uadmb9d.css';
import '../../css/h/hxzj3yk3h.css';
import '../../css/i/ixrulac1n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGqu8QYcfM"><g class="v3_i3wktz"><path class="i4uadmb9d"/><path class="hxzj3yk3h"/><path class="ixrulac1n"/></g></mask></defs><path mask="url(#SVGqu8QYcfM)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:first-aid-kit"} {...others} />);
}

export default Component;
