import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tblmeeb4n.css';
import '../../css/o/o8vni54ea.css';
import '../../css/a/aiyg2ojqh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tblmeeb4n"/><path class="o8vni54ea"/><path class="aiyg2ojqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:person-walking-20"} {...others} />);
}

export default Component;
