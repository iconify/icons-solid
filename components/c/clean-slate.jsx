import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-q8_6bdy.css';
import '../../css/j/jotj22eow.css';
import '../../css/v/vhkbj_bbs.css';
import '../../css/n/n6olitbtd.css';
import '../../css/f/f_ovi2aeo.css';
import '../../css/i/iwe3kjpvu.css';
import '../../css/z/z5pl81b9i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d-q8_6bdy"/><path class="jotj22eow"/><path class="vhkbj_bbs"/><path class="n6olitbtd"/><path class="f_ovi2aeo"/><path class="iwe3kjpvu"/><path class="z5pl81b9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:clean-slate"} {...others} />);
}

export default Component;
