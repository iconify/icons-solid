import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i7kf2hbsh.css';
import '../../css/v/vyfrjvxaq.css';
import '../../css/p/p_yafhj5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="i7kf2hbsh"/><path class="vyfrjvxaq"/><path class="p_yafhj5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:circle-arrows-down-duotone"} {...others} />);
}

export default Component;
