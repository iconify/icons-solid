import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hik5r3n6m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hik5r3n6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:crown-fill-round"} {...others} />);
}

export default Component;
