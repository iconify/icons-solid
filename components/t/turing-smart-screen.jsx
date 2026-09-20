import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6ckg4bnd.css';
import '../../css/d/dysu5hdsr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h6ckg4bnd"/><path class="dysu5hdsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:turing-smart-screen"} {...others} />);
}

export default Component;
