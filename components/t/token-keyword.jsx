import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/alod_jbur.css';
import '../../css/j/jgg6r11_w.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="alod_jbur"/><path clip-rule="evenodd" class="jgg6r11_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:token-keyword"} {...others} />);
}

export default Component;
