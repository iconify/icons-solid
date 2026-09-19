import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngoscyb5h.css';
import '../../css/a/afo7_lbhx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ngoscyb5h"/><path class="afo7_lbhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-cog"} {...others} />);
}

export default Component;
