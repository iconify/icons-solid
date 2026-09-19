import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qw4g0-bgr.css';

const viewBox = {"width":28,"height":24};
const content = `<path class="qw4g0-bgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:surgical-knife"} {...others} />);
}

export default Component;
