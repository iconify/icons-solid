import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iz0-u9bdl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iz0-u9bdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uis:paragraph"} {...others} />);
}

export default Component;
