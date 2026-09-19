import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/znzhc5ozp.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="znzhc5ozp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:myspace"} {...others} />);
}

export default Component;
