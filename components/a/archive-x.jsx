import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o5lzqcznd.css';
import '../../css/w/wlz81vnea.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="o5lzqcznd"/><path class="wlz81vnea"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:archive-x"} {...others} />);
}

export default Component;
