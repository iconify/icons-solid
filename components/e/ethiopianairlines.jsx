import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wkgk1dcfe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wkgk1dcfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:ethiopianairlines"} {...others} />);
}

export default Component;
