import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zev9aeikb.css';
import '../../css/v/vprbqcbbw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zev9aeikb"/><path class="vprbqcbbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:freshrss-dark"} {...others} />);
}

export default Component;
