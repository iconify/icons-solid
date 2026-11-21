import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jyb13_mva.css';
import '../../css/g/go7uigb4e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jyb13_mva"/><path class="go7uigb4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:codetta"} {...others} />);
}

export default Component;
