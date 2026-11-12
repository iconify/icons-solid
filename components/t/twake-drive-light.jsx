import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qumyb9bal.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qumyb9bal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:twake-drive-light"} {...others} />);
}

export default Component;
