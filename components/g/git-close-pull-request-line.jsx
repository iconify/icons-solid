import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/otv5c1bim.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="otv5c1bim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:git-close-pull-request-line"} {...others} />);
}

export default Component;
