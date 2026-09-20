import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3lfhabdq.css';
import '../../css/j/jkwo7bc1r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h3lfhabdq"/><path class="jkwo7bc1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bookstack"} {...others} />);
}

export default Component;
