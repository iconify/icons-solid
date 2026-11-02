import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ga4y_tbqr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ga4y_tbqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:book-heart-fill"} {...others} />);
}

export default Component;
