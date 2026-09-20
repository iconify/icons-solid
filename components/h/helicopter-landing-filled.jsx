import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pk577i3vl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pk577i3vl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:helicopter-landing-filled"} {...others} />);
}

export default Component;
