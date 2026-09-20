import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/v/vaernzbtx.css';
import '../../css/s/so6y00bvk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="vaernzbtx"/><path class="so6y00bvk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:stock"} {...others} />);
}

export default Component;
