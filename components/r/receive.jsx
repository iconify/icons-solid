import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/l/lob544bai.css';
import '../../css/o/oc_uw1_ec.css';
import '../../css/s/slbmsqbwn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGUq04pc1j"><g class="gopnm44um"><path class="lob544bai"/><path class="oc_uw1_ec"/><path class="slbmsqbwn"/></g></mask></defs><path mask="url(#SVGUq04pc1j)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:receive"} {...others} />);
}

export default Component;
