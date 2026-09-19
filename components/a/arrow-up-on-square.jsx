import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpya52bie.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="kpya52bie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:arrow-up-on-square"} {...others} />);
}

export default Component;
