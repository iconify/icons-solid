import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prb5lc1je.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="prb5lc1je"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:cupcake-line"} {...others} />);
}

export default Component;
