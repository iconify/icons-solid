import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gu3t0ac_w.css';
import '../../css/u/uobch0qxj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gu3t0ac_w"/><path class="uobch0qxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:color-spray"} {...others} />);
}

export default Component;
