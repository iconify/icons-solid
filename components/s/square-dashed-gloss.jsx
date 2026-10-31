import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/im1ri0b8y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="im1ri0b8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:square-dashed-gloss"} {...others} />);
}

export default Component;
