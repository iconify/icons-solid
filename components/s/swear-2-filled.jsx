import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tt0r02b_r.css';
import '../../css/m/mq4ja3bsd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tt0r02b_r"/><path class="mq4ja3bsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:swear-2-filled"} {...others} />);
}

export default Component;
