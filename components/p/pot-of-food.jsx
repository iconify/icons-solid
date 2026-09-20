import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0hu8ieet.css';
import '../../css/e/e5_g43bxn.css';
import '../../css/u/u187tccwh.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="b0hu8ieet"/><path class="e5_g43bxn"/><path class="u187tccwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:pot-of-food"} {...others} />);
}

export default Component;
