import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c1fasq_os.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c1fasq_os"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:shield-keyhole-line"} {...others} />);
}

export default Component;
