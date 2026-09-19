import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwkmj8bsf.css';

const viewBox = {"width":384,"height":384};
const content = `<path class="bwkmj8bsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:format-align-left"} {...others} />);
}

export default Component;
