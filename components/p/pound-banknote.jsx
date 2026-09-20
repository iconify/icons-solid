import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6wh3497s.css';
import '../../css/k/kz72wdb0i.css';
import '../../css/z/zsn_dkb-f.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/f/frmc66bsi.css';
import '../../css/p/pjuqq5t1u.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="z6wh3497s"/><path class="kz72wdb0i"/><path class="zsn_dkb-f"/><g class="jn8qy4bru"><path class="frmc66bsi"/><path class="pjuqq5t1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:pound-banknote"} {...others} />);
}

export default Component;
