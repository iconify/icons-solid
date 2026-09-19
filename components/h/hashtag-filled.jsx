import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g9k5yp1vf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g9k5yp1vf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:hashtag-filled"} {...others} />);
}

export default Component;
