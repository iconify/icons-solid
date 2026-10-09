import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5gnfjbdr.css';
import '../../css/l/lj6h3gwfe.css';
import '../../css/c/c1mb_dbpr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b5gnfjbdr"/><path class="lj6h3gwfe"/><path class="c1mb_dbpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wand-20-bold"} {...others} />);
}

export default Component;
