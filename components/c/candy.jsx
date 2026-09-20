import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5im9zq6u.css';
import '../../css/n/n_sxreb9w.css';
import '../../css/k/k14tjwbvq.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/v1wogklci.css';
import '../../css/k/kn6fy412m.css';
import '../../css/x/xazvwfswb.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="s5im9zq6u"/><circle class="n_sxreb9w"/><path class="k14tjwbvq"/><g class="jn8qy4bru"><circle transform="rotate(-45 36 35.999)" class="v1wogklci"/><path class="kn6fy412m"/><circle transform="rotate(-45 36 35.958)" class="xazvwfswb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:candy"} {...others} />);
}

export default Component;
