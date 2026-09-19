import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u99g9jbsb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u99g9jbsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:technische-alternative"} {...others} />);
}

export default Component;
