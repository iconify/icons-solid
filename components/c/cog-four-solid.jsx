import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ge-76lk_m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ge-76lk_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:cog-four-solid"} {...others} />);
}

export default Component;
