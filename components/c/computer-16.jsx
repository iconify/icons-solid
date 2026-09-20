import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kynx-6isf.css';
import '../../css/b/bjufppbwi.css';
import '../../css/y/ylytiqbzz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kynx-6isf"/><path class="bjufppbwi"/><path clip-rule="evenodd" class="ylytiqbzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:computer-16"} {...others} />);
}

export default Component;
