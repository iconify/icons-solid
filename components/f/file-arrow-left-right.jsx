import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx1cgxh8m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jx1cgxh8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:file-arrow-left-right"} {...others} />);
}

export default Component;
