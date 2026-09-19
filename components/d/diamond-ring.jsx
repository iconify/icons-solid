import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rbb69cszp.css';
import '../../css/b/bd4pvgbwl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG9gDKKegE"><g class="aql7dnt-u"><circle class="rbb69cszp"/><path class="bd4pvgbwl"/></g></mask></defs><path mask="url(#SVG9gDKKegE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:diamond-ring"} {...others} />);
}

export default Component;
