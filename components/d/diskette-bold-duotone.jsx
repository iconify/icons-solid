import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ue3ui5iyp.css';
import '../../css/h/haz-fbj8x.css';
import '../../css/w/wryd348yz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ue3ui5iyp"/><path class="haz-fbj8x"/><path class="wryd348yz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:diskette-bold-duotone"} {...others} />);
}

export default Component;
