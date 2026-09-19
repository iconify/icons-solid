import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vnep0m7rs.css';
import '../../css/z/zar1cn4so.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vnep0m7rs"/><path class="zar1cn4so"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-in-up-left-circle"} {...others} />);
}

export default Component;
