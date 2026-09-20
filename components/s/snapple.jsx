import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93s1nzau.css';
import '../../css/n/nossaacwq.css';

const viewBox = {"width":187.782,"height":79.202};
const content = `<path class="o93s1nzau"/><path class="nossaacwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:snapple"} {...others} />);
}

export default Component;
