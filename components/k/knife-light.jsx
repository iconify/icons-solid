import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qm6u1bg0l.css';
import '../../css/x/xct7nzwyh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="qm6u1bg0l"/><path class="xct7nzwyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:knife-light"} {...others} />);
}

export default Component;
