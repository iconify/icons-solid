import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zuj2j6pai.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zuj2j6pai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:ceiling-lamp"} {...others} />);
}

export default Component;
