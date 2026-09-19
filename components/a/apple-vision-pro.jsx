import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k66w0-bok.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k66w0-bok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:apple-vision-pro"} {...others} />);
}

export default Component;
