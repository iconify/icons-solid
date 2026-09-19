import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xwz0i-bmg.css';

const viewBox = {"width":520,"height":472};
const content = `<path class="xwz0i-bmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:piggy-bank"} {...others} />);
}

export default Component;
