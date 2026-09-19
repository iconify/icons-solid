import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b7t_h5btd.css';
import '../../css/n/nft7dqf3o.css';
import '../../css/q/qeazwhzjd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="b7t_h5btd"/><path class="nft7dqf3o"/><path class="qeazwhzjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-receive-square"} {...others} />);
}

export default Component;
