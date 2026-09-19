import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtlavwb_s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wtlavwb_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:arrange-by-numbers-19"} {...others} />);
}

export default Component;
