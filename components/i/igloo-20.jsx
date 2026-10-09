import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a27-2bahm.css';
import '../../css/i/i1hgre67m.css';
import '../../css/k/kac4dlpam.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a27-2bahm"/><path class="i1hgre67m"/><path class="kac4dlpam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:igloo-20"} {...others} />);
}

export default Component;
