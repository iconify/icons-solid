import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uz5j96neh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uz5j96neh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rocky-linux-light"} {...others} />);
}

export default Component;
