import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xv-rjdbpf.css';

const viewBox = {"width":528,"height":496};
const content = `<path class="xv-rjdbpf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:machine-wash-gentle-or-delicate"} {...others} />);
}

export default Component;
