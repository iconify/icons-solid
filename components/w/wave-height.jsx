import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxfrv-bud.css';
import '../../css/n/nw12yw8jj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gxfrv-bud"/><path class="nw12yw8jj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:wave-height"} {...others} />);
}

export default Component;
