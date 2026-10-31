import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/le9u54-7e.css';
import '../../css/t/t4fmldbqy.css';
import '../../css/z/zoa_b5bnt.css';
import '../../css/s/slrtfiplt.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="le9u54-7e"/><path class="t4fmldbqy"/><path class="zoa_b5bnt"/><path class="slrtfiplt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:squid"} {...others} />);
}

export default Component;
