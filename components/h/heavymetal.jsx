import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bu6p_sb1e.css';

const viewBox = {"width":705,"height":1024};
const content = `<path class="bu6p_sb1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:heavymetal"} {...others} />);
}

export default Component;
