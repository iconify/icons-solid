import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dhwc6r0ph.css';
import '../../css/s/shg2v-1kc.css';
import '../../css/q/qyy7xtbde.css';
import '../../css/h/h6cnvobhw.css';
import '../../css/m/m9_zzcbtm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGdep7LdGf"><g class="ft5dv1b6b"><path class="dhwc6r0ph"/><rect class="shg2v-1kc"/><rect class="qyy7xtbde"/><path class="h6cnvobhw"/><path class="m9_zzcbtm"/></g></mask></defs><path mask="url(#SVGdep7LdGf)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:charging-treasure"} {...others} />);
}

export default Component;
