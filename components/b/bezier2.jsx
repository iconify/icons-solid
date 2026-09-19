import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-1rxo8ja.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="p-1rxo8ja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:bezier2"} {...others} />);
}

export default Component;
