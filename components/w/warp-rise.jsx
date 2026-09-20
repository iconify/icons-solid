import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/yefusvbjz.css';
import '../../css/g/gictbubip.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="yefusvbjz"/><path class="gictbubip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:warp-rise"} {...others} />);
}

export default Component;
