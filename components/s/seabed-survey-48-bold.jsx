import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b611vubcy.css';
import '../../css/f/fg-wh3qoy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b611vubcy"/><path class="fg-wh3qoy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:seabed-survey-48-bold"} {...others} />);
}

export default Component;
