import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/d/du6ly7_6u.css';
import '../../css/l/l_zb0kbii.css';
import '../../css/n/ni471xbpa.css';
import '../../css/q/qlrywpd7k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGRVADRczg"><g class="gopnm44um"><ellipse class="du6ly7_6u"/><path class="l_zb0kbii"/><circle class="ni471xbpa"/><circle class="qlrywpd7k"/></g></mask></defs><path mask="url(#SVGRVADRczg)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:soap-bubble"} {...others} />);
}

export default Component;
