import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/f/fiw9h3bjt.css';
import '../../css/j/jcgjnnb8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="fiw9h3bjt"/><path class="jcgjnnb8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:clock-2"} {...others} />);
}

export default Component;
