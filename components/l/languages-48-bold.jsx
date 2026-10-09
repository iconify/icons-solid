import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fpkfulj6u.css';
import '../../css/r/rinax6lee.css';
import '../../css/c/cnadooubh.css';
import '../../css/g/gfm-7czce.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fpkfulj6u"/><path class="rinax6lee"/><path class="cnadooubh"/><path class="gfm-7czce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:languages-48-bold"} {...others} />);
}

export default Component;
