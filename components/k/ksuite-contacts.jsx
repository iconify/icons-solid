import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fut96rbkh.css';
import '../../css/w/waobp-biz.css';
import '../../css/v/v5ifasbxi.css';
import '../../css/f/fb9fhtmzb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fut96rbkh"/><path class="waobp-biz"/><path class="v5ifasbxi"/><path class="fb9fhtmzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-contacts"} {...others} />);
}

export default Component;
