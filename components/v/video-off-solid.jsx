import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fz9ek_b7u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fz9ek_b7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:video-off-solid"} {...others} />);
}

export default Component;
