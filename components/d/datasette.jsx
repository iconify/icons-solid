import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c66xcebar.css';
import '../../css/a/at6xz-pmo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c66xcebar"/><path class="at6xz-pmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:datasette"} {...others} />);
}

export default Component;
