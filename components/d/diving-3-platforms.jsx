import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ide58leqh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ide58leqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:diving-3-platforms"} {...others} />);
}

export default Component;
