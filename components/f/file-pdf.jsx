import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5mlk4bke.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="f5mlk4bke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:file-pdf"} {...others} />);
}

export default Component;
