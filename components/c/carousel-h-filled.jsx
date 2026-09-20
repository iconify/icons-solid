import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zshbt6bzp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zshbt6bzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:carousel-h-filled"} {...others} />);
}

export default Component;
