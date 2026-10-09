import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewn1ke3br.css';
import '../../css/e/euk2bdbjj.css';
import '../../css/c/cdid3gb_h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ewn1ke3br"/><path class="euk2bdbjj"/><path class="cdid3gb_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grid-3x3-20"} {...others} />);
}

export default Component;
