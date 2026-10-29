import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nuz5b1zvg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nuz5b1zvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:smile-solid"} {...others} />);
}

export default Component;
