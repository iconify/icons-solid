import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yyrkxgbie.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yyrkxgbie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:lift-in-window-open2"} {...others} />);
}

export default Component;
