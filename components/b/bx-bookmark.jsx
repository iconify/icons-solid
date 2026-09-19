import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ioh0fbcui.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ioh0fbcui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-bookmark"} {...others} />);
}

export default Component;
