import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z64_rrb0q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z64_rrb0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chevron-down-sharp-two-tone"} {...others} />);
}

export default Component;
