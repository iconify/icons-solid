import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wyr___g3f.css';
import '../../css/d/dfv392bxj.css';
import '../../css/g/g03t4bb1m.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wyr___g3f"/><circle class="dfv392bxj"/><path class="g03t4bb1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:server-proxy"} {...others} />);
}

export default Component;
