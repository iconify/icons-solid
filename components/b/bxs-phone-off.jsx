import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_mz2acfd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a_mz2acfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-phone-off"} {...others} />);
}

export default Component;
