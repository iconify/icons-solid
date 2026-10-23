import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/km7z8w6gb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="km7z8w6gb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:globe-lock"} {...others} />);
}

export default Component;
