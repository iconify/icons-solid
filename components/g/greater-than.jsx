import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iysm_8bpt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iysm_8bpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:greater-than"} {...others} />);
}

export default Component;
