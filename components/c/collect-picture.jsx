import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bho4nib7o.css';
import '../../css/f/f-k3qpbta.css';
import '../../css/x/xythsibvz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGqwqlQdLE"><g class="ft5dv1b6b"><path class="bho4nib7o"/><path class="f-k3qpbta"/><path class="xythsibvz"/></g></mask></defs><path mask="url(#SVGqwqlQdLE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:collect-picture"} {...others} />);
}

export default Component;
