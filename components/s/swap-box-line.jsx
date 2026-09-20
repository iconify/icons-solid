import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/re_gkwr9d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="re_gkwr9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:swap-box-line"} {...others} />);
}

export default Component;
