import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kw9z6cbod.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kw9z6cbod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:backblaze-dark"} {...others} />);
}

export default Component;
