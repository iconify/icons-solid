import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1bv5jbrn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r1bv5jbrn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:minus"} {...others} />);
}

export default Component;
