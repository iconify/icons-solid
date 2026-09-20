import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqu-t3b3r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uqu-t3b3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:gitlab-fill"} {...others} />);
}

export default Component;
