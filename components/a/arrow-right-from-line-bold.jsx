import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xteelq4gg.css';
import '../../css/h/h28ok-b2f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xteelq4gg"/><path class="h28ok-b2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-right-from-line-bold"} {...others} />);
}

export default Component;
