import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xneq1mbiq.css';
import '../../css/o/okweau1mj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xneq1mbiq"/><path class="okweau1mj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:safari-line"} {...others} />);
}

export default Component;
