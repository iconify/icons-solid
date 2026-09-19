import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ub1ttxb2n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ub1ttxb2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:body-part-six-pack"} {...others} />);
}

export default Component;
