import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqh0obcuq.css';
import '../../css/o/oz0-7c0kb.css';
import '../../css/d/dyi9gpb5f.css';
import '../../css/y/yppz-1bcl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pqh0obcuq"/><path class="oz0-7c0kb"/><path class="dyi9gpb5f"/><path class="yppz-1bcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-capture-48-bold"} {...others} />);
}

export default Component;
