import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mk5kasbyr.css';
import '../../css/i/idnpklgal.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mk5kasbyr"/><path class="idnpklgal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:transfer-vertical-bold"} {...others} />);
}

export default Component;
