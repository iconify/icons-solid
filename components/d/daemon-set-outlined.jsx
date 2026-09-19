import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zu5bcab4r.css';
import '../../css/r/rc_7mwb4l.css';
import '../../css/p/pvoh7sbyh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zu5bcab4r"/><path class="rc_7mwb4l"/><path class="pvoh7sbyh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:daemon-set-outlined"} {...others} />);
}

export default Component;
