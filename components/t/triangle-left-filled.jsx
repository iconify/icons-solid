import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7zrjaq9d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n7zrjaq9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:triangle-left-filled"} {...others} />);
}

export default Component;
