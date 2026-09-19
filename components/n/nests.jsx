import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/d/dkifpkb7f.css';
import '../../css/e/ed0jdhbeg.css';
import '../../css/z/z6n0qjvfb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGtnDBWJ9A"><g class="v3_i3wktz"><path class="dkifpkb7f"/><path clip-rule="evenodd" class="ed0jdhbeg"/><path clip-rule="evenodd" class="z6n0qjvfb"/></g></mask></defs><path mask="url(#SVGtnDBWJ9A)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:nests"} {...others} />);
}

export default Component;
