import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3k4ivb8s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s3k4ivb8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:linkedin-alt"} {...others} />);
}

export default Component;
