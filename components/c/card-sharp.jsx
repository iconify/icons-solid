import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfyqi8juj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yfyqi8juj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:card-sharp"} {...others} />);
}

export default Component;
