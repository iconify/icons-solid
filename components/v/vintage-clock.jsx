import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dhvj8qb5m.css';
import '../../css/u/ur_5djb1t.css';
import '../../css/i/i8h-plf8e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="dhvj8qb5m"/><path class="ur_5djb1t"/><path class="i8h-plf8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:vintage-clock"} {...others} />);
}

export default Component;
