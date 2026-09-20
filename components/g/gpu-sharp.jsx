import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cga6z43xl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cga6z43xl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:gpu-sharp"} {...others} />);
}

export default Component;
