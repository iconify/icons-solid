import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxhtq0_0l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zxhtq0_0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:copyparty-dark"} {...others} />);
}

export default Component;
