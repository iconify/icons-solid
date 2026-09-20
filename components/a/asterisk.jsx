import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oox-7jbzf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="oox-7jbzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:asterisk"} {...others} />);
}

export default Component;
