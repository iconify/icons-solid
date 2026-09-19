import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gtaeff6hs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gtaeff6hs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:wheelchair-tennis"} {...others} />);
}

export default Component;
