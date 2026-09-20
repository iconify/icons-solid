import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8-ajz3mr.css';
import '../../css/c/cw9ts4b7s.css';
import '../../css/l/lv8kz-w7x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r8-ajz3mr"/><path class="cw9ts4b7s"/><path class="lv8kz-w7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:flip-h-alt"} {...others} />);
}

export default Component;
