import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jg_-8gbxp.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="jg_-8gbxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:gbp"} {...others} />);
}

export default Component;
