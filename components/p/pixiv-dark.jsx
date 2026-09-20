import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f69_d7b-m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f69_d7b-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pixiv-dark"} {...others} />);
}

export default Component;
