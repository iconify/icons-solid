import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sgehlxb8p.css';
import '../../css/b/bdn4j9fmc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sgehlxb8p"/><path class="bdn4j9fmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:chevron-down"} {...others} />);
}

export default Component;
