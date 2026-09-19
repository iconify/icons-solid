import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trhuiyb4d.css';
import '../../css/j/j_4gibdnf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="trhuiyb4d"/><path class="j_4gibdnf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:edit"} {...others} />);
}

export default Component;
