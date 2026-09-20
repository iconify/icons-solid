import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2m1qdbbh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="r2m1qdbbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:bicycle-plug"} {...others} />);
}

export default Component;
