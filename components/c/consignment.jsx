import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/c/cnt9cgbpv.css';
import '../../css/q/qjktzcb3c.css';
import '../../css/i/iqbmekbjd.css';
import '../../css/t/tpwofyy5y.css';
import '../../css/i/ijdcclchf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGyd3TUcSK"><g class="s9cl3zbei"><path class="cnt9cgbpv"/><path class="qjktzcb3c"/><path class="iqbmekbjd"/><path class="tpwofyy5y"/><path class="ijdcclchf"/></g></mask></defs><path mask="url(#SVGyd3TUcSK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:consignment"} {...others} />);
}

export default Component;
