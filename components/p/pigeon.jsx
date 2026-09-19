import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nbav1obyp.css';
import '../../css/w/wm8gb-9hv.css';
import '../../css/u/u2q07cbcb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGVSzTtc9I"><g class="ft5dv1b6b"><path class="nbav1obyp"/><path class="wm8gb-9hv"/><circle class="u2q07cbcb"/></g></mask></defs><path mask="url(#SVGVSzTtc9I)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:pigeon"} {...others} />);
}

export default Component;
