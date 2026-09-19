import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwibdw4bb.css';
import '../../css/t/to64u9f4k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bwibdw4bb"/><path class="to64u9f4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-left-circle"} {...others} />);
}

export default Component;
