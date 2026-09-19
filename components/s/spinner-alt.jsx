import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f72o4bbwd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f72o4bbwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:spinner-alt"} {...others} />);
}

export default Component;
