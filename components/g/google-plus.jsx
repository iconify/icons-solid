import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8gd7yp_v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d8gd7yp_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:google-plus"} {...others} />);
}

export default Component;
