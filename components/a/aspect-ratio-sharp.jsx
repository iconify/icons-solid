import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5flc7b_p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a5flc7b_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:aspect-ratio-sharp"} {...others} />);
}

export default Component;
