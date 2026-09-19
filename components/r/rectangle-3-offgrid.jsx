import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vt1o8pbzv.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="vt1o8pbzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:rectangle-3-offgrid"} {...others} />);
}

export default Component;
