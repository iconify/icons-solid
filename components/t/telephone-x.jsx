import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d0dntab6u.css';
import '../../css/v/v7-askbif.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="d0dntab6u"/><path class="v7-askbif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:telephone-x"} {...others} />);
}

export default Component;
