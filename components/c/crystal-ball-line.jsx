import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bop0cmbcg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bop0cmbcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:crystal-ball-line"} {...others} />);
}

export default Component;
