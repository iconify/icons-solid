import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnluy6pil.css';
import '../../css/b/bgpfsd5wd.css';
import '../../css/b/bmq6w9aab.css';
import '../../css/l/lmovn-nth.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wnluy6pil"/><path class="bgpfsd5wd"/><path class="bmq6w9aab"/><path clip-rule="evenodd" class="lmovn-nth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cat-outline"} {...others} />);
}

export default Component;
