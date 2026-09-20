import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/giiqp_bku.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="giiqp_bku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:flag"} {...others} />);
}

export default Component;
