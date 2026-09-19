import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d38hmobbn.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="d38hmobbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:meh-rolling-eyes"} {...others} />);
}

export default Component;
