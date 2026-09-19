import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xatnruabq.css';
import '../../css/y/ynuha5bfz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xatnruabq"/><path class="ynuha5bfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:configuration-file"} {...others} />);
}

export default Component;
