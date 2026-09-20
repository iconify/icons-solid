import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/truvlgbtk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="truvlgbtk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nextcloud-office-presentation"} {...others} />);
}

export default Component;
