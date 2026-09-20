import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aubbjwbfk.css';
import '../../css/r/rp9ikhbyj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="aubbjwbfk"/><path class="rp9ikhbyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:oak-identity"} {...others} />);
}

export default Component;
