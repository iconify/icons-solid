import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsr7ex80b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lsr7ex80b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:google-cloud"} {...others} />);
}

export default Component;
