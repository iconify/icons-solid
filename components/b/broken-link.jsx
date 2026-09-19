import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lv2f5p14q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lv2f5p14q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:broken-link"} {...others} />);
}

export default Component;
