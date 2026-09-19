import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8wc5t8ax.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="g8wc5t8ax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:chevron-left"} {...others} />);
}

export default Component;
