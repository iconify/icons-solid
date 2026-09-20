import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9wr-tufw.css';
import '../../css/b/b_gbm88ug.css';
import '../../css/i/inndkdxao.css';

const viewBox = {"width":1024,"height":1024};
const content = `<g class="h9wr-tufw"><path class="b_gbm88ug"/><path class="inndkdxao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:otne"} {...others} />);
}

export default Component;
