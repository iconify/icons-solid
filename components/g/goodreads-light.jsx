import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ldh1zzbqy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ldh1zzbqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:goodreads-light"} {...others} />);
}

export default Component;
