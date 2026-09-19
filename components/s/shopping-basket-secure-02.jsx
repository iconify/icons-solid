import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cee13rb4e.css';
import '../../css/y/yjo9i5b3u.css';
import '../../css/h/hj8o_dx2p.css';
import '../../css/n/np00yb5tm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="cee13rb4e"/><path class="yjo9i5b3u"/><path class="hj8o_dx2p"/><path class="np00yb5tm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shopping-basket-secure-02"} {...others} />);
}

export default Component;
