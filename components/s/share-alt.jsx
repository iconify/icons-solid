import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8yi8ab8x.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="h8yi8ab8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:share-alt"} {...others} />);
}

export default Component;
