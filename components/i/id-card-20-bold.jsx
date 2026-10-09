import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pn86m-bcf.css';
import '../../css/y/ydr36qd6q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pn86m-bcf"/><path class="ydr36qd6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:id-card-20-bold"} {...others} />);
}

export default Component;
