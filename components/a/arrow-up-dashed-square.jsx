import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/y/yj0jynlgh.css';
import '../../css/i/i9fjvjobi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="yj0jynlgh"/><path class="i9fjvjobi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:arrow-up-dashed-square"} {...others} />);
}

export default Component;
