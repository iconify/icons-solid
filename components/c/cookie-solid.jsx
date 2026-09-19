import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpmyr_clo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hpmyr_clo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:cookie-solid"} {...others} />);
}

export default Component;
