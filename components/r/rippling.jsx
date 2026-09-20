import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p5-oqd5ef.css';
import '../../css/n/nhikcvf6f.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="p5-oqd5ef"/><path class="nhikcvf6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:rippling"} {...others} />);
}

export default Component;
