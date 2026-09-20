import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/knv9mypjn.css';
import '../../css/o/oao8y4zzg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="knv9mypjn"/><path class="oao8y4zzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hyperpipe"} {...others} />);
}

export default Component;
