import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/fjagq7bdj.css';
import '../../css/y/ydqauvg5t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGgfK5ncmj"><g class="v3_i3wktz"><path class="fjagq7bdj"/><path class="ydqauvg5t"/></g></mask></defs><path mask="url(#SVGgfK5ncmj)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:flashlight"} {...others} />);
}

export default Component;
