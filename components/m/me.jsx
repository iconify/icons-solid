import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/p/pt-0x-bak.css';
import '../../css/a/az4l81ban.css';
import '../../css/l/lxj99hpsx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGArhzCdfE"><g class="v3_i3wktz"><path clip-rule="evenodd" class="pt-0x-bak"/><path class="az4l81ban"/><path class="lxj99hpsx"/></g></mask></defs><path mask="url(#SVGArhzCdfE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:me"} {...others} />);
}

export default Component;
