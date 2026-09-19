import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/o/ohzyaebtv.css';
import '../../css/z/zclm7dbio.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG4zKLYclc"><g class="v3_i3wktz"><path class="ohzyaebtv"/><path class="zclm7dbio"/></g></mask></defs><path mask="url(#SVG4zKLYclc)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:cactus"} {...others} />);
}

export default Component;
