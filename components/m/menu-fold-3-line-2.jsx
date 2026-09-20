import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yy9yn_biv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yy9yn_biv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:menu-fold-3-line-2"} {...others} />);
}

export default Component;
