import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rc7hm0bsd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rc7hm0bsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:microscope-off"} {...others} />);
}

export default Component;
