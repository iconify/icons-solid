import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g36zgr.css';
import '../../css/d/dg35tf.css';
import '../../css/c/cx-from-7px.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g36zgr"/><circle class="dg35tf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:switch-off-to-switch-transition"} {...others} />);
}

export default Component;
