import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1-6q3lmy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y1-6q3lmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:social-github-circular"} {...others} />);
}

export default Component;
