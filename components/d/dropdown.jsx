import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rup5qzhbu.css';

const viewBox = {"width":616,"height":614};
const content = `<path class="rup5qzhbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:dropdown"} {...others} />);
}

export default Component;
