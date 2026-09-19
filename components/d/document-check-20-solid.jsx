import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6isgs9fp.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="m6isgs9fp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:document-check-20-solid"} {...others} />);
}

export default Component;
