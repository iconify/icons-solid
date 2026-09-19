import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-butvbmw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f-butvbmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:slider-vertical-filled"} {...others} />);
}

export default Component;
