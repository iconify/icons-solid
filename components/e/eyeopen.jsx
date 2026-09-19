import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ze0k2yv1l.css';

const viewBox = {"width":1024,"height":896};
const content = `<path class="ze0k2yv1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:eyeopen"} {...others} />);
}

export default Component;
