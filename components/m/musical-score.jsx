import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvoo6thzj.css';
import '../../css/j/jz9026bsf.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jvoo6thzj"/><circle class="jz9026bsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:musical-score"} {...others} />);
}

export default Component;
