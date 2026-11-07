import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wm-fdvb-j.css';
import '../../css/s/s6dl6st5p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-fdvb-j"/><path class="s6dl6st5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:archive-down-bold"} {...others} />);
}

export default Component;
