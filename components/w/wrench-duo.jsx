import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_xmpxb6b.css';
import '../../css/n/nkm2n0b6m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a_xmpxb6b secondary"/><path class="nkm2n0b6m primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:wrench-duo"} {...others} />);
}

export default Component;
