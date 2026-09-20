import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctl9dy8me.css';
import '../../css/k/kq3mrbcfj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ctl9dy8me"/><path class="kq3mrbcfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:adobe-photoshop"} {...others} />);
}

export default Component;
