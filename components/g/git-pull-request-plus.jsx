import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5oe7xhjh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q5oe7xhjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-pull-request-plus"} {...others} />);
}

export default Component;
