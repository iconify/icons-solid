import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bpt2b0b1z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bpt2b0b1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:heart-solid"} {...others} />);
}

export default Component;
