import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0o6zdbeq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v0o6zdbeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:outdent-ltr"} {...others} />);
}

export default Component;
