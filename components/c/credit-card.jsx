import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ia73cybmz.css';
import '../../css/c/ccy637b1a.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ia73cybmz"/><path class="ccy637b1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:credit-card"} {...others} />);
}

export default Component;
