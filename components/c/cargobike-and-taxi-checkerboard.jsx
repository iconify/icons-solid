import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7wv62--d.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="i7wv62--d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:cargobike-and-taxi-checkerboard"} {...others} />);
}

export default Component;
