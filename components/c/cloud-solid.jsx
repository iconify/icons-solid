import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5-b86y2t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j5-b86y2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:cloud-solid"} {...others} />);
}

export default Component;
