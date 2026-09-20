import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sd8vn1rbq.css';
import '../../css/y/yuj1lj0ko.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sd8vn1rbq"/><path class="yuj1lj0ko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:iris-scan-1-bold"} {...others} />);
}

export default Component;
