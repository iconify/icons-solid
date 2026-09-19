import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/g6ovlz6dh.css';
import '../../css/g/gazpy_epd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGwOZAOeIa"><g class="aql7dnt-u"><path class="g6ovlz6dh"/><path class="gazpy_epd"/></g></mask></defs><path mask="url(#SVGwOZAOeIa)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:area-map"} {...others} />);
}

export default Component;
