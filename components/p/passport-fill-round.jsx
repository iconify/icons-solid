import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hks2i43dl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hks2i43dl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:passport-fill-round"} {...others} />);
}

export default Component;
