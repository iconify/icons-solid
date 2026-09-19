import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/p/ph1wei72v.css';
import '../../css/v/vwunhkbts.css';
import '../../css/g/g5flyubde.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG8K0cLdxT"><g class="v3_i3wktz"><path class="ph1wei72v"/><path class="vwunhkbts"/><path class="g5flyubde"/></g></mask></defs><path mask="url(#SVG8K0cLdxT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bachelor-cap-one"} {...others} />);
}

export default Component;
