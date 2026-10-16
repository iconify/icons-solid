import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/azssgq8vo.css';
import '../../css/w/wd5k02b6k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="azssgq8vo"/><path class="wd5k02b6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hazard-flammable-48"} {...others} />);
}

export default Component;
