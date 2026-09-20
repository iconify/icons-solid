import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2eohmjnc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k2eohmjnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:google-keep-logo-2-bold"} {...others} />);
}

export default Component;
