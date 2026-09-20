import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmbygwb-v.css';

const viewBox = {"width":1045.7,"height":85};
const content = `<path class="bmbygwb-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:jaguar-legacy-dark"} {...others} />);
}

export default Component;
