import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbb582b_y.css';
import '../../css/o/onr57qb4e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fbb582b_y"/><path class="onr57qb4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bracket-dark"} {...others} />);
}

export default Component;
