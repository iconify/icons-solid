import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9jb50raj.css';
import '../../css/x/x23q6jtbs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r9jb50raj"/><path class="x23q6jtbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ovumcy-light"} {...others} />);
}

export default Component;
