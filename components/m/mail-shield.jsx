import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vqntw0b8l.css';
import '../../css/o/or41fg4zb.css';
import '../../css/y/ym2hmp47k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vqntw0b8l"/><path class="or41fg4zb"/><path class="ym2hmp47k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:mail-shield"} {...others} />);
}

export default Component;
