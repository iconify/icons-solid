import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h92390rbo.css';
import '../../css/a/a7fz73bbw.css';
import '../../css/f/f3vfs2z_j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h92390rbo"/><path class="a7fz73bbw"/><path class="f3vfs2z_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:yen-20-bold"} {...others} />);
}

export default Component;
