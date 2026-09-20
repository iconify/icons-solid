import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dao-jj67u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dao-jj67u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:twitter-solid"} {...others} />);
}

export default Component;
