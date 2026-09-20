import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9jb50raj.css';
import '../../css/j/jzvh2fb3h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r9jb50raj"/><path class="jzvh2fb3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ovumcy-light"} {...others} />);
}

export default Component;
