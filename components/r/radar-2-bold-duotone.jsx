import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnb90nbxf.css';
import '../../css/r/rj5bf4blb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rnb90nbxf"/><path class="rj5bf4blb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:radar-2-bold-duotone"} {...others} />);
}

export default Component;
