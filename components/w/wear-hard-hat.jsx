import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cx1a2vbqs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cx1a2vbqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:wear-hard-hat"} {...others} />);
}

export default Component;
