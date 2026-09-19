import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wbb35bbyg.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="wbb35bbyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:target-two"} {...others} />);
}

export default Component;
