import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udehd1bxt.css';
import '../../css/y/yancwabok.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="udehd1bxt"/><path class="yancwabok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:display"} {...others} />);
}

export default Component;
