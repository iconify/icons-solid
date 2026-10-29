import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/it_6p9c4c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="it_6p9c4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rewind-solid"} {...others} />);
}

export default Component;
