import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n60fh_bvx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n60fh_bvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:zoom-out"} {...others} />);
}

export default Component;
