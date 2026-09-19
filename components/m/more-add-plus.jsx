import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zb_u_rrkn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zb_u_rrkn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:more-add-plus"} {...others} />);
}

export default Component;
