import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/d/d4k84fb8w.css';
import '../../css/l/liehw0htx.css';
import '../../css/a/a3-7_pbqx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="d4k84fb8w"/><path class="liehw0htx"/><path class="a3-7_pbqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:pyramid-shape"} {...others} />);
}

export default Component;
