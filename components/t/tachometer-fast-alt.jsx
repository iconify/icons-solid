import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rh3y5mqlb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rh3y5mqlb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:tachometer-fast-alt"} {...others} />);
}

export default Component;
