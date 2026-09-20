import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dnr7_pc2c.css';
import '../../css/y/yonf7by6s.css';
import '../../css/v/vm46r9bsk.css';
import '../../css/z/zucc7kqxu.css';
import '../../css/y/y5fhatbfs.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="dnr7_pc2c"/><path class="yonf7by6s"/><circle class="vm46r9bsk"/><circle class="zucc7kqxu"/><path class="y5fhatbfs"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-mongolia"} {...others} />);
}

export default Component;
