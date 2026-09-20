import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fh3e_4i8e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fh3e_4i8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:remove-format"} {...others} />);
}

export default Component;
