import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/guw_mk73j.css';
import '../../css/i/ilmsi6bmd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="guw_mk73j"/><path clip-rule="evenodd" class="ilmsi6bmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:question-filled"} {...others} />);
}

export default Component;
