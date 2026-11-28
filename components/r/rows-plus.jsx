import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tn1a4jxpg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tn1a4jxpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:rows-plus"} {...others} />);
}

export default Component;
