import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jc8wj-c_r.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="jc8wj-c_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:save"} {...others} />);
}

export default Component;
