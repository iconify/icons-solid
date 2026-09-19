import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8nrbqb1t.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="x8nrbqb1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:browser-safari"} {...others} />);
}

export default Component;
