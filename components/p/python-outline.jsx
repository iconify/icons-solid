import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gmi6sy-ao.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gmi6sy-ao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:python-outline"} {...others} />);
}

export default Component;
