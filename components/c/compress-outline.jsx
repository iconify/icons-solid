import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ov-d0q17d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ov-d0q17d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:compress-outline"} {...others} />);
}

export default Component;
