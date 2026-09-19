import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wq2m00b2g.css';
import '../../css/a/a6rvn_b0u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wq2m00b2g"/><path class="a6rvn_b0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-copy-alt"} {...others} />);
}

export default Component;
