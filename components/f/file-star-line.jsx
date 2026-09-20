import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ed5-32ims.css';
import '../../css/v/ve641vb0q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ed5-32ims"/><path class="ve641vb0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:file-star-line"} {...others} />);
}

export default Component;
