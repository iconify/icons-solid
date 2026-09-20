import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hu21_9btv.css';
import '../../css/y/ygivrbbwf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hu21_9btv"/><path class="ygivrbbwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:screw-nut"} {...others} />);
}

export default Component;
