import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hijq5lfhd.css';

const viewBox = {"width":1664,"height":1408};
const content = `<path class="hijq5lfhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:quote-right"} {...others} />);
}

export default Component;
