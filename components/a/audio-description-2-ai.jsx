import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmmi8805w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bmmi8805w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:audio-description-2-ai"} {...others} />);
}

export default Component;
