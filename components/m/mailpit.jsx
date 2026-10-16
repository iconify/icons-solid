import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/olgn96bqv.css';
import '../../css/j/jse14viep.css';

const viewBox = {"width":132.292,"height":121.708};
const content = `<path class="olgn96bqv"/><path class="jse14viep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mailpit"} {...others} />);
}

export default Component;
