import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/w/whph_o--x.css';
import '../../css/q/qdjay_j5b.css';
import '../../css/y/yveo74b2b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGWNgSieUZ"><g class="ufeehvblu"><path class="whph_o--x"/><path class="qdjay_j5b"/><path class="yveo74b2b"/></g></mask></defs><path mask="url(#SVGWNgSieUZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:install"} {...others} />);
}

export default Component;
