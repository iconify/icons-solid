import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/v/voxy1aceb.css';
import '../../css/j/jbjhzw2kz.css';
import '../../css/n/nlnyzpbpz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGHwVmOb8z"><g class="aql7dnt-u"><path class="voxy1aceb"/><path class="jbjhzw2kz"/><path class="nlnyzpbpz"/></g></mask></defs><path mask="url(#SVGHwVmOb8z)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:tent"} {...others} />);
}

export default Component;
