import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5qx8cb0r.css';
import '../../css/a/aycg7s_1n.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="h5qx8cb0r"/><path class="aycg7s_1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:dribbble"} {...others} />);
}

export default Component;
