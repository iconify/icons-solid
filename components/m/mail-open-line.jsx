import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/if2x6zcnr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="if2x6zcnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:mail-open-line"} {...others} />);
}

export default Component;
