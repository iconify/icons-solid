import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cb2z7spts.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cb2z7spts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:captioning-outline"} {...others} />);
}

export default Component;
