import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clnl6s1aj.css';
import '../../css/w/whz9jobil.css';
import '../../css/u/u65oy1y8y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="clnl6s1aj"/><rect class="whz9jobil"/><rect class="u65oy1y8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:vertical-distribute-top-filled"} {...others} />);
}

export default Component;
