import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwf0k67yb.css';
import '../../css/o/o94p-i96p.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jwf0k67yb"/><path class="o94p-i96p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:content-print"} {...others} />);
}

export default Component;
