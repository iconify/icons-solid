import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mzlzjbb7f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mzlzjbb7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:flame-sharp"} {...others} />);
}

export default Component;
