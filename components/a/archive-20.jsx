import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p93n1m73s.css';
import '../../css/t/tgao99i9c.css';
import '../../css/q/qg0hzccxf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p93n1m73s"/><path class="tgao99i9c"/><path class="qg0hzccxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:archive-20"} {...others} />);
}

export default Component;
