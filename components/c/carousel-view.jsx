import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/re5tqlbnd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="re5tqlbnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:carousel-view"} {...others} />);
}

export default Component;
