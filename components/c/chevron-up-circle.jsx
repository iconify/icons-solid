import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwibdw4bb.css';
import '../../css/c/c9z1q4djr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bwibdw4bb"/><path class="c9z1q4djr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:chevron-up-circle"} {...others} />);
}

export default Component;
