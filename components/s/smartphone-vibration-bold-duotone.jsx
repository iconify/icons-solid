import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aa-q70rgp.css';
import '../../css/x/x9e98-bhc.css';
import '../../css/h/hz8p9hb-q.css';
import '../../css/i/i9sh2gasf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aa-q70rgp"/><path class="x9e98-bhc"/><path class="hz8p9hb-q"/><path class="i9sh2gasf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smartphone-vibration-bold-duotone"} {...others} />);
}

export default Component;
