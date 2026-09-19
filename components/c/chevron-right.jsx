import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2ff8ab5y.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="a2ff8ab5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:chevron-right"} {...others} />);
}

export default Component;
