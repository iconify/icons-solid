import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5np-7oxh.css';
import '../../css/w/wousxhbxy.css';
import '../../css/g/gzag1fbky.css';
import '../../css/r/r08d7pb2m.css';

const viewBox = {"width":328,"height":319};
const content = `<path class="h5np-7oxh"/><path class="wousxhbxy"/><path class="gzag1fbky"/><path class="r08d7pb2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:soldera-dark"} {...others} />);
}

export default Component;
