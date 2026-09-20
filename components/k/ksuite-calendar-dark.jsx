import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xj8dkmkmu.css';
import '../../css/m/mvmn2eb4z.css';
import '../../css/n/nvr0ynxmo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xj8dkmkmu"/><path class="mvmn2eb4z"/><path class="nvr0ynxmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-calendar-dark"} {...others} />);
}

export default Component;
