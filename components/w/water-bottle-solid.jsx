import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s46z6zm0z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s46z6zm0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:water-bottle-solid"} {...others} />);
}

export default Component;
