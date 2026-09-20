import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_sjz8b4l.css';
import '../../css/c/c080srerl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a_sjz8b4l"/><path class="c080srerl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:html5"} {...others} />);
}

export default Component;
