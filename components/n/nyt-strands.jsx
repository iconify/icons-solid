import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jh1u6cmlr.css';
import '../../css/f/flmjdj3we.css';
import '../../css/x/xu50pybzl.css';
import '../../css/o/o2rektbsy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jh1u6cmlr"/><path class="flmjdj3we"/><path class="xu50pybzl"/><path class="o2rektbsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nyt-strands"} {...others} />);
}

export default Component;
