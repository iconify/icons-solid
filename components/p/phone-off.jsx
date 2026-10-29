import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nfwhnbt1r.css';
import '../../css/m/m3ec0pbhi.css';
import '../../css/y/y54l1sbik.css';
import '../../css/b/bk36dlbzy.css';
import '../../css/k/k0szoct2x.css';
import '../../css/p/pq9qjib2x.css';
import '../../css/c/cpsmz3vsf.css';
import '../../css/p/pmw83f9fd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nfwhnbt1r wm-shadow"/><path class="m3ec0pbhi wm-k"/><path class="wm-k y54l1sbik"/><path class="bk36dlbzy wm-k"/><path class="k0szoct2x wm-k"/><path class="pq9qjib2x wm-k"/><path class="cpsmz3vsf wm-shine"/><path class="pmw83f9fd wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:phone-off"} {...others} />);
}

export default Component;
