import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adexpl72i.css';
import '../../css/t/t7q-hstoq.css';
import '../../css/y/ymiwr7boi.css';
import '../../css/h/hy76pnetd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGOIrfybod"><g class="adexpl72i"><circle class="t7q-hstoq"/><circle class="ymiwr7boi"/><path class="hy76pnetd"/></g></mask></defs><path mask="url(#SVGOIrfybod)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:public-toilet"} {...others} />);
}

export default Component;
