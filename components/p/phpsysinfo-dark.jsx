import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sndodubfo.css';
import '../../css/a/a4nkfj3oj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sndodubfo"/><path class="a4nkfj3oj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:phpsysinfo-dark"} {...others} />);
}

export default Component;
