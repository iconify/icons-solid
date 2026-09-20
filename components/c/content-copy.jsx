import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/izc259z0t.css';
import '../../css/u/u29y0z2tk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="izc259z0t"/><path class="u29y0z2tk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:content-copy"} {...others} />);
}

export default Component;
