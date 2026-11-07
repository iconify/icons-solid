import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajralqjgp.css';
import '../../css/s/siai_tb_r.css';
import '../../css/p/p1472sozf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ajralqjgp"/><path class="siai_tb_r"/><path class="p1472sozf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:inbox-unread-bold-duotone"} {...others} />);
}

export default Component;
