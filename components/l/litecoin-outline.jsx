import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1frgq2nm.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="f1frgq2nm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:litecoin-outline"} {...others} />);
}

export default Component;
