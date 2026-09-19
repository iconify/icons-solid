import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/nprab3b2b.css';
import '../../css/r/ritj3zbkd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGkmWImcNq"><g class="aql7dnt-u"><path class="nprab3b2b"/><path class="ritj3zbkd"/></g></mask></defs><path mask="url(#SVGkmWImcNq)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:checkerboard"} {...others} />);
}

export default Component;
