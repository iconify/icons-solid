import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vi_4_2dxt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vi_4_2dxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:airline-rapid-board"} {...others} />);
}

export default Component;
