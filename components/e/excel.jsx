import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/a/af7k0bcjr.css';
import '../../css/z/z4mkicczo.css';
import '../../css/g/gn-ngo33l.css';
import '../../css/m/myt3h8b6l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGjWkfddWq"><g class="hv130ab-t"><path class="af7k0bcjr"/><path class="z4mkicczo"/><path class="gn-ngo33l"/><path class="myt3h8b6l"/></g></mask></defs><path mask="url(#SVGjWkfddWq)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:excel"} {...others} />);
}

export default Component;
