import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpc6rz4yp.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="jpc6rz4yp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:facebook-solid"} {...others} />);
}

export default Component;
