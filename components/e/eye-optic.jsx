import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hmfh-5aqd.css';
import '../../css/s/s1ic-421r.css';
import '../../css/v/vh3on17vk.css';
import '../../css/u/uuk2k-_eh.css';
import '../../css/b/bj8erlb9v.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="hmfh-5aqd"/><path class="s1ic-421r"/><path class="vh3on17vk"/><path class="uuk2k-_eh"/><path class="bj8erlb9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:eye-optic"} {...others} />);
}

export default Component;
