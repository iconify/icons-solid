import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3ft7sbvr.css';
import '../../css/p/p-jt3neah.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h3ft7sbvr"/><path class="p-jt3neah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:haus"} {...others} />);
}

export default Component;
