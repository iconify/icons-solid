import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vevo467ae.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vevo467ae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:file-image-solid"} {...others} />);
}

export default Component;
