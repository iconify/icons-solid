import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/chsjt2b1x.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="chsjt2b1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:paragraph-outline"} {...others} />);
}

export default Component;
