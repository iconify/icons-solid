import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ok-_polxz.css';
import '../../css/a/azxuvfb9k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ok-_polxz"/><path class="azxuvfb9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:menu"} {...others} />);
}

export default Component;
