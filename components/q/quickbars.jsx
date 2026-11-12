import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7bxye5gu.css';
import '../../css/f/f0tftrz9n.css';
import '../../css/m/m41x7yb6k.css';
import '../../css/o/o1r8z0b3m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j7bxye5gu"/><path class="f0tftrz9n"/><path class="m41x7yb6k"/><path class="o1r8z0b3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:quickbars"} {...others} />);
}

export default Component;
