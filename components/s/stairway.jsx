import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tt6gjyb0z.css';
import '../../css/h/hs9yxrbzv.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="tt6gjyb0z"/><path class="hs9yxrbzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:stairway"} {...others} />);
}

export default Component;
