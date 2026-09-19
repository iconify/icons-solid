import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/giif6sjfp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="giif6sjfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:equal-square-filled"} {...others} />);
}

export default Component;
