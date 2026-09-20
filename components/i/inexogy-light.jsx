import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az7jgjy2r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="az7jgjy2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:inexogy-light"} {...others} />);
}

export default Component;
