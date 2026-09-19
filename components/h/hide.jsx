import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfq0e50ja.css';
import '../../css/n/nc-7gwy-h.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="qfq0e50ja"/><path class="nc-7gwy-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:hide"} {...others} />);
}

export default Component;
