import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zbloa41vd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zbloa41vd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:go-to-prev-cell-outline"} {...others} />);
}

export default Component;
