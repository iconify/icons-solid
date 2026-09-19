import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fq6kcibbx.css';
import '../../css/n/nw_1midni.css';
import '../../css/g/gtxro9plz.css';
import '../../css/t/t228px9jw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fq6kcibbx"/><path class="nw_1midni"/><path class="gtxro9plz"/><path class="t228px9jw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:information-circle-outline"} {...others} />);
}

export default Component;
