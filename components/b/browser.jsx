import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2b3f1bel.css';
import '../../css/b/bbxz0jq4i.css';
import '../../css/q/qtskb2sji.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGXHvbndxd"><g class="ft5dv1b6b"><path class="n2b3f1bel"/><path class="bbxz0jq4i"/><path clip-rule="evenodd" class="qtskb2sji"/></g></mask></defs><path mask="url(#SVGXHvbndxd)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:browser"} {...others} />);
}

export default Component;
