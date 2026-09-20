import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6la11b1v.css';
import '../../css/o/okcf14hbm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y6la11b1v"/><path class="okcf14hbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:search-magnifier"} {...others} />);
}

export default Component;
