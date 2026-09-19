import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ky0dkjbft.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ky0dkjbft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:airplane-alt-01"} {...others} />);
}

export default Component;
