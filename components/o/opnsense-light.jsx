import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tskkj_7-j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tskkj_7-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:opnsense-light"} {...others} />);
}

export default Component;
