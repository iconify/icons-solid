import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k0yh24b-q.css';
import '../../css/r/rnowmjbsd.css';
import '../../css/j/j2pc4z88n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k0yh24b-q"/><path class="rnowmjbsd"/><rect class="j2pc4z88n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:book-lock"} {...others} />);
}

export default Component;
