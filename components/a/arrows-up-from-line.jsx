import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ll58u1lzp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ll58u1lzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:arrows-up-from-line"} {...others} />);
}

export default Component;
