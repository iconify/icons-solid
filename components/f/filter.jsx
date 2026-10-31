import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lrke56x2n.css';
import '../../css/b/b62s-qcfq.css';
import '../../css/f/flj7hj2gq.css';
import '../../css/o/ot9di8qwu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="lrke56x2n wm-shadow"/><path class="b62s-qcfq wm-shadow"/><path class="flj7hj2gq"/><path class="ot9di8qwu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:filter"} {...others} />);
}

export default Component;
