import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h7d5s2ykc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h7d5s2ykc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:source-branch-refresh"} {...others} />);
}

export default Component;
