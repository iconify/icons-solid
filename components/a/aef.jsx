import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwqbt-xqa.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="mwqbt-xqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:aef"} {...others} />);
}

export default Component;
