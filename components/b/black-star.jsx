import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8hwn3qsq.css';
import '../../css/x/x38ni45vb.css';
import '../../css/s/s7yettc0g.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="h8hwn3qsq"/><path class="x38ni45vb"/><path class="s7yettc0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:black-star"} {...others} />);
}

export default Component;
