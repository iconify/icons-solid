import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ee9ei2fuh.css';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/o-esvy8uf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><path id="SVGAq5dccsu" class="ee9ei2fuh"/><mask id="SVGiZ9C8DHZ"><g class="aql7dnt-u"><use href="#SVGAq5dccsu"/><use href="#SVGAq5dccsu"/><path class="o-esvy8uf"/></g></mask></defs><path mask="url(#SVGiZ9C8DHZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:refraction"} {...others} />);
}

export default Component;
