import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/touros3ng.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="touros3ng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:folder-up-solid"} {...others} />);
}

export default Component;
