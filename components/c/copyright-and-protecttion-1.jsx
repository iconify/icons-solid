import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y9eekiq5u.css';
import '../../css/p/pwxw9515l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="y9eekiq5u"/><path class="pwxw9515l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:copyright-and-protecttion-1"} {...others} />);
}

export default Component;
