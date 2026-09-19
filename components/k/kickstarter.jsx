import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2kv7-_oa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n2kv7-_oa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:kickstarter"} {...others} />);
}

export default Component;
