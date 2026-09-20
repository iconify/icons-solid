import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lm628pxnn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lm628pxnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:suitcase-2-line"} {...others} />);
}

export default Component;
