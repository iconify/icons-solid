import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnb90nbxf.css';
import '../../css/s/sp3f8uwqx.css';
import '../../css/w/we9_13rpl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rnb90nbxf"/><path class="sp3f8uwqx"/><path class="we9_13rpl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rewind-forward-circle-bold-duotone"} {...others} />);
}

export default Component;
