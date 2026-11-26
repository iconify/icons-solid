import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/glkqlxbac.css';
import '../../css/f/fvwt6sbil.css';
import '../../css/g/goklkbcov.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="d2kvgvbvc"><path class="glkqlxbac"/><path class="fvwt6sbil"/><path class="goklkbcov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ml-4x3"} {...others} />);
}

export default Component;
