import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6x2luhbf.css';
import '../../css/d/dnqhx8bqg.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="w6x2luhbf"/><path class="dnqhx8bqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:add-1m"} {...others} />);
}

export default Component;
