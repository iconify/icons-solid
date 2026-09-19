import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/z/zu8kvebxi.css';
import '../../css/t/tiqol0v4d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGxkHcKemv"><g class="rohhhzb0l"><path class="zu8kvebxi"/><path class="tiqol0v4d"/></g></mask></defs><path mask="url(#SVGxkHcKemv)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:mask-one"} {...others} />);
}

export default Component;
