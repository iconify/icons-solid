import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oy9ooh44h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oy9ooh44h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:graph-arrow-user-increase"} {...others} />);
}

export default Component;
