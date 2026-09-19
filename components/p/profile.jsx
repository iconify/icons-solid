import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yavxk_bsz.css';
import '../../css/i/ixpy7yyki.css';
import '../../css/p/pn-hlnbwd.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="yavxk_bsz"/><path class="ixpy7yyki"/><path class="pn-hlnbwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:profile"} {...others} />);
}

export default Component;
