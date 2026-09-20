import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j14ur1b8a.css';
import '../../css/y/ybf22hb-b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j14ur1b8a"/><path class="ybf22hb-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:counter-analytics"} {...others} />);
}

export default Component;
