import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-zo8jdsd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c-zo8jdsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:bus-stop-covered"} {...others} />);
}

export default Component;
