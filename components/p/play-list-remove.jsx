import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jog5b1b3n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jog5b1b3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:play-list-remove"} {...others} />);
}

export default Component;
