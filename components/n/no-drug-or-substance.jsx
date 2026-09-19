import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqhk5lcyg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wqhk5lcyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:no-drug-or-substance"} {...others} />);
}

export default Component;
