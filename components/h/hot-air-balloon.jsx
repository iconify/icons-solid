import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cef01bcjg.css';
import '../../css/a/afb9b6fbe.css';
import '../../css/r/r7pgu-b1y.css';
import '../../css/m/mfz_dvbkz.css';
import '../../css/p/p3nxasb2v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGb7lRybDH"><g class="ft5dv1b6b"><path class="cef01bcjg"/><path class="afb9b6fbe"/><path class="r7pgu-b1y"/><path class="mfz_dvbkz"/><path class="p3nxasb2v"/></g></mask></defs><path mask="url(#SVGb7lRybDH)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:hot-air-balloon"} {...others} />);
}

export default Component;
