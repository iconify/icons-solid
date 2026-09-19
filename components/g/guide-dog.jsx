import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2hgrbbwz.css';
import '../../css/c/cnr4z9ptg.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="r2hgrbbwz"/><path class="cnr4z9ptg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:guide-dog"} {...others} />);
}

export default Component;
