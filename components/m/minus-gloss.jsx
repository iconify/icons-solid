import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iubtq7foy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iubtq7foy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:minus-gloss"} {...others} />);
}

export default Component;
