import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/afu2d_v6u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="afu2d_v6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:bezier"} {...others} />);
}

export default Component;
