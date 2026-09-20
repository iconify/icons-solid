import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fw8ww4nck.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fw8ww4nck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:checkcle-dark"} {...others} />);
}

export default Component;
