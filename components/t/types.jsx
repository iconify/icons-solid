import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qughtqkib.css';
import '../../css/y/y0vpd67op.css';
import '../../css/z/zcfun48xi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qughtqkib"/><path class="y0vpd67op"/><path class="zcfun48xi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:types"} {...others} />);
}

export default Component;
