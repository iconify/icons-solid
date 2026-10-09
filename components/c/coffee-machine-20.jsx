import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ykzdjc98c.css';
import '../../css/j/jb6-4ckfo.css';
import '../../css/o/o70pwlbdq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ykzdjc98c"/><path class="jb6-4ckfo"/><path class="o70pwlbdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:coffee-machine-20"} {...others} />);
}

export default Component;
