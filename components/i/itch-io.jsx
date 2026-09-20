import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hkg0_ibsl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hkg0_ibsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:itch-io"} {...others} />);
}

export default Component;
