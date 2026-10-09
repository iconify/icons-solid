import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uayr9jbjw.css';
import '../../css/e/ebana2mce.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uayr9jbjw"/><path class="ebana2mce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sea-level-rise-48-bold"} {...others} />);
}

export default Component;
