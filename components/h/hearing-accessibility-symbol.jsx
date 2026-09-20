import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q32_3-bnv.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="q32_3-bnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:hearing-accessibility-symbol"} {...others} />);
}

export default Component;
