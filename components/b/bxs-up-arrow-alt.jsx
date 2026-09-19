import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rjg93ebpw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rjg93ebpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-up-arrow-alt"} {...others} />);
}

export default Component;
