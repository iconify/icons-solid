import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tw-5d-bur.css';
import '../../css/i/iox2jrb0a.css';
import '../../css/g/ghxkzbb4m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tw-5d-bur"/><path class="iox2jrb0a"/><path class="ghxkzbb4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:connector-ccs-20"} {...others} />);
}

export default Component;
