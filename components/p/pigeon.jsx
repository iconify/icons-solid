import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nbav1obyp.css';
import '../../css/s/sml478zfl.css';
import '../../css/v/vul_vqbzp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGYvTCAF8S"><g class="ft5dv1b6b"><path class="nbav1obyp"/><path class="sml478zfl"/><circle class="vul_vqbzp"/></g></mask></defs><path mask="url(#SVGYvTCAF8S)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:pigeon"} {...others} />);
}

export default Component;
