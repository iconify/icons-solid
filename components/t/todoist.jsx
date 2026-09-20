import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_tld4ojc.css';
import '../../css/b/bu-7bcciv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b_tld4ojc"/><path class="bu-7bcciv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:todoist"} {...others} />);
}

export default Component;
