import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hutzjvbwo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hutzjvbwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:triangle-half-filled"} {...others} />);
}

export default Component;
