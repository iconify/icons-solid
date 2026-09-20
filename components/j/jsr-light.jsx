import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjzxlob2s.css';
import '../../css/f/fb-q3w5sr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="sjzxlob2s"/><path class="fb-q3w5sr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:jsr-light"} {...others} />);
}

export default Component;
