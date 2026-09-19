import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/xa2d9bb0k.css';
import '../../css/j/jroqwgjpq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGLiEztcGW"><g class="v3_i3wktz"><path class="xa2d9bb0k"/><path class="jroqwgjpq"/></g></mask></defs><path mask="url(#SVGLiEztcGW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:music"} {...others} />);
}

export default Component;
