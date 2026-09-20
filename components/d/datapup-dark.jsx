import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0hhnivpo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j0hhnivpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:datapup-dark"} {...others} />);
}

export default Component;
