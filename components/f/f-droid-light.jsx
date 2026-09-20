import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/um9s7iazo.css';
import '../../css/n/npuhol_7o.css';
import '../../css/f/f7wi88xzu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="um9s7iazo"/><path class="npuhol_7o"/><path class="f7wi88xzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:f-droid-light"} {...others} />);
}

export default Component;
