import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4w6i6b8i.css';
import '../../css/u/uyqtxdb1p.css';
import '../../css/j/j5g68mb7c.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="y4w6i6b8i"/><path class="uyqtxdb1p"/><path class="j5g68mb7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:black-large-square"} {...others} />);
}

export default Component;
