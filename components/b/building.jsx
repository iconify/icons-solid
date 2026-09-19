import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjq3ac0dg.css';
import '../../css/i/ipjtrphds.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xjq3ac0dg"/><path class="ipjtrphds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:building"} {...others} />);
}

export default Component;
