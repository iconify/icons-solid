import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eh9o9hbqg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eh9o9hbqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:rewind-left-outline"} {...others} />);
}

export default Component;
