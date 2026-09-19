import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3t2e4m8i.css';

const viewBox = {"width":1026,"height":1022};
const content = `<path class="t3t2e4m8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:silverstripe"} {...others} />);
}

export default Component;
