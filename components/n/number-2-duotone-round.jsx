import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g4-f04bok.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g4-f04bok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:number-2-duotone-round"} {...others} />);
}

export default Component;
