import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wisis3x7u.css';
import '../../css/m/mprc9wbfv.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="wisis3x7u"/><path class="mprc9wbfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:call-in-16"} {...others} />);
}

export default Component;
