import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/maggq5byx.css';
import '../../css/p/ph-tdvwvh.css';
import '../../css/d/dz9auwwmv.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="maggq5byx"/><path class="ph-tdvwvh"/><circle class="dz9auwwmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:mk-4x3"} {...others} />);
}

export default Component;
