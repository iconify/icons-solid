import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxxghkvqp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zxxghkvqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:arrow-forward"} {...others} />);
}

export default Component;
