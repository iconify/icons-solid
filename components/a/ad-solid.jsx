import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pj80fbt_q.css';
import '../../css/t/t_1qkzbho.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pj80fbt_q"/><path class="t_1qkzbho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:ad-solid"} {...others} />);
}

export default Component;
