import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mzy55k3-q.css';
import '../../css/g/gtbk85xxx.css';
import '../../css/c/cfprd2egi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mzy55k3-q"/><path class="gtbk85xxx"/><path class="cfprd2egi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:information-outline"} {...others} />);
}

export default Component;
