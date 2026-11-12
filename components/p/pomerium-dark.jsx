import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6oo7nb8e.css';
import '../../css/p/phxmbeb9b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a6oo7nb8e"/><path class="phxmbeb9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pomerium-dark"} {...others} />);
}

export default Component;
