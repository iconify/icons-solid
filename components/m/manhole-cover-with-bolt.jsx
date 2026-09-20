import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcnii5bpg.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="wcnii5bpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:manhole-cover-with-bolt"} {...others} />);
}

export default Component;
