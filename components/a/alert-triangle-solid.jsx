import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m492rfbss.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m492rfbss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:alert-triangle-solid"} {...others} />);
}

export default Component;
