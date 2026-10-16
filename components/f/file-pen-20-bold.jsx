import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezyuvccht.css';
import '../../css/l/lz-h06bny.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ezyuvccht"/><path class="lz-h06bny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-pen-20-bold"} {...others} />);
}

export default Component;
