import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6a0qnbks.css';
import '../../css/k/k2rhzeb7g.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="c6a0qnbks"/><path class="k2rhzeb7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ballet-shoes"} {...others} />);
}

export default Component;
