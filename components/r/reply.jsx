import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vsjan4b5k.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="vsjan4b5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:reply"} {...others} />);
}

export default Component;
