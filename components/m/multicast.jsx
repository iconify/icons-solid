import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csw0kbbpv.css';
import '../../css/w/wckasab0r.css';
import '../../css/j/j10ksqbpm.css';
import '../../css/x/x6bc1350x.css';
import '../../css/e/em5bsmbgk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGn43Vscpo"><g class="csw0kbbpv"><path class="wckasab0r"/><path class="j10ksqbpm"/><path class="x6bc1350x"/><path class="em5bsmbgk"/></g></mask></defs><path mask="url(#SVGn43Vscpo)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:multicast"} {...others} />);
}

export default Component;
