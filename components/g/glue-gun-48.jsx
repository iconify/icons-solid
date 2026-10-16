import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ycd8zvvjv.css';
import '../../css/c/c9il3frxy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ycd8zvvjv"/><path class="c9il3frxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:glue-gun-48"} {...others} />);
}

export default Component;
