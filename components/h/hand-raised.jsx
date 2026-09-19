import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ij9xh8x8m.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="ij9xh8x8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:hand-raised"} {...others} />);
}

export default Component;
