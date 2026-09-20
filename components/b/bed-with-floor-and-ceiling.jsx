import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr9hqtbec.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tr9hqtbec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:bed-with-floor-and-ceiling"} {...others} />);
}

export default Component;
