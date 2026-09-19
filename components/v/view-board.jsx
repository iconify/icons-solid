import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fj1qj2dgf.css';
import '../../css/x/xdvevhb_b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fj1qj2dgf"/><path class="xdvevhb_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:view-board"} {...others} />);
}

export default Component;
