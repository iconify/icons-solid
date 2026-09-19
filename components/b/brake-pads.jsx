import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/y/y3m5p6eju.css';
import '../../css/c/cyr620bkc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGPfAb1cWI"><g class="aql7dnt-u"><path class="y3m5p6eju"/><path class="cyr620bkc"/></g></mask></defs><path mask="url(#SVGPfAb1cWI)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:brake-pads"} {...others} />);
}

export default Component;
