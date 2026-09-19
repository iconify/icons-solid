import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/b8cd-f9hp.css';
import '../../css/k/kzptuhikc.css';
import '../../css/d/d8x3xzbpj.css';
import '../../css/y/yr5k3xbui.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGSHsbMe7A"><g class="aql7dnt-u"><path class="b8cd-f9hp"/><path class="kzptuhikc"/><path class="d8x3xzbpj"/><path class="yr5k3xbui"/></g></mask></defs><path mask="url(#SVGSHsbMe7A)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:branch-one"} {...others} />);
}

export default Component;
