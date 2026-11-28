import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zs2lp--bm.css';
import '../../css/r/rn8fz8f3c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary zs2lp--bm"/><path class="primary rn8fz8f3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:snapchat-duo"} {...others} />);
}

export default Component;
