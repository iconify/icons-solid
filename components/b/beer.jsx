import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/orvuzw1eu.css';
import '../../css/p/pfm0_8fry.css';
import '../../css/c/c8q0b5a8h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="orvuzw1eu"/><path class="pfm0_8fry"/><path class="c8q0b5a8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:beer"} {...others} />);
}

export default Component;
