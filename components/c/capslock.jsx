import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ph9q5h07s.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ph9q5h07s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:capslock"} {...others} />);
}

export default Component;
