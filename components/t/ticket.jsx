import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/z/zsyk_j46v.css';
import '../../css/s/si-nqabns.css';
import '../../css/d/dkfj0ub_t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlANxqehJ"><g class="hv130ab-t"><path class="zsyk_j46v"/><path class="si-nqabns"/><path class="dkfj0ub_t"/></g></mask></defs><path mask="url(#SVGlANxqehJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:ticket"} {...others} />);
}

export default Component;
