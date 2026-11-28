import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yx-p57btg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yx-p57btg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:dashboard-plus"} {...others} />);
}

export default Component;
