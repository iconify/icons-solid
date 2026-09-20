import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ied5c4bsg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ied5c4bsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:movie-line"} {...others} />);
}

export default Component;
