import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jxcwr8xud.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jxcwr8xud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:arrow-top-right-bold-box"} {...others} />);
}

export default Component;
