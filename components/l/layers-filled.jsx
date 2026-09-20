import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xcaua0tov.css';
import '../../css/h/h8815mb5m.css';
import '../../css/e/exyf57_1n.css';
import '../../css/z/zxaq837ci.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xcaua0tov"/><path clip-rule="evenodd" class="h8815mb5m"/><path class="exyf57_1n"/><path class="zxaq837ci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:layers-filled"} {...others} />);
}

export default Component;
