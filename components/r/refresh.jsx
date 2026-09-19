import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4ing4w0e.css';
import '../../css/j/jqvw4p60w.css';

const viewBox = {"width":14,"height":16};
const content = `<path class="v4ing4w0e"/><path class="jqvw4p60w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:refresh"} {...others} />);
}

export default Component;
