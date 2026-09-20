import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aw9twle1r.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="aw9twle1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:quit-full-screen-square-outline"} {...others} />);
}

export default Component;
