import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iy45tmhze.css';
import '../../css/g/ga0yskbrz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="iy45tmhze"/><path class="ga0yskbrz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:book-closed-fill-16"} {...others} />);
}

export default Component;
