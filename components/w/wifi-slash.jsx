import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vz6-h_4-l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vz6-h_4-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:wifi-slash"} {...others} />);
}

export default Component;
