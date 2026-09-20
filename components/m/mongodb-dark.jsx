import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/msfe4rzvr.css';

const viewBox = {"width":120,"height":257};
const content = `<path class="msfe4rzvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mongodb-dark"} {...others} />);
}

export default Component;
