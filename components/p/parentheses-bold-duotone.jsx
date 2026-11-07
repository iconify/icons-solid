import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0cksp2iz.css';
import '../../css/x/xcjnzfb6j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i0cksp2iz"/><path class="xcjnzfb6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:parentheses-bold-duotone"} {...others} />);
}

export default Component;
