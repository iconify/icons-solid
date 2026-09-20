import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/faekp9bkh.css';
import '../../css/r/ry8otvb5y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="faekp9bkh"/><path class="ry8otvb5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:repoflow"} {...others} />);
}

export default Component;
