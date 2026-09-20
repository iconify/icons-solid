import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_nk98b2c.css';
import '../../css/d/d9qn9ybwj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b_nk98b2c"/><path class="d9qn9ybwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:vertigo-comics"} {...others} />);
}

export default Component;
