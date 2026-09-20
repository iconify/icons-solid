import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t96m9ac6z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t96m9ac6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:speech-to-text-line"} {...others} />);
}

export default Component;
