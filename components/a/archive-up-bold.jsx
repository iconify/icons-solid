import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ujz70yoss.css';
import '../../css/s/s6dl6st5p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ujz70yoss"/><path class="s6dl6st5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:archive-up-bold"} {...others} />);
}

export default Component;
