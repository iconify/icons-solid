import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/x/xedfj89fl.css';
import '../../css/o/otjj2dzfa.css';
import '../../css/m/mdc3ss7xx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGENzItdvk"><g class="rohhhzb0l"><path class="vkcj4bcdm"/><path class="xedfj89fl"/><path class="otjj2dzfa"/><path class="mdc3ss7xx"/></g></mask></defs><path mask="url(#SVGENzItdvk)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:music-cd"} {...others} />);
}

export default Component;
