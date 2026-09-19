import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zo1tk3-8o.css';
import '../../css/x/x18puqb7i.css';
import '../../css/w/w8jozfhvk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGAlPGBhXj"><g class="zo1tk3-8o"><path class="x18puqb7i"/><path class="w8jozfhvk"/></g></mask></defs><path mask="url(#SVGAlPGBhXj)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:vigo"} {...others} />);
}

export default Component;
