import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9wi5p_9x.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="u9wi5p_9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:gobackward-75"} {...others} />);
}

export default Component;
