import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g6l-kpbwa.css';
import '../../css/n/ngq2artnh.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/j/jdn1rvbrs.css';
import '../../css/a/aukz7zd6r.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="g6l-kpbwa"/><path class="ngq2artnh"/><g class="jn8qy4bru"><path class="jdn1rvbrs"/><path class="aukz7zd6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:onion"} {...others} />);
}

export default Component;
