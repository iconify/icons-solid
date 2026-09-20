import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_m1lbgnk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q_m1lbgnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:fandom-logo-1-block"} {...others} />);
}

export default Component;
