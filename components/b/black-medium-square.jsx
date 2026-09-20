import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr5lrxbeo.css';
import '../../css/y/y5hdzhbmr.css';
import '../../css/y/yi3irnyqf.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="pr5lrxbeo"/><path class="y5hdzhbmr"/><path class="yi3irnyqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:black-medium-square"} {...others} />);
}

export default Component;
