import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y7hbvqb6k.css';
import '../../css/d/dn482ty1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="y7hbvqb6k"/><path class="dn482ty1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bookmark-block-02"} {...others} />);
}

export default Component;
