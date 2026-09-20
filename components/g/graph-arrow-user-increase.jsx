import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/z/z86ro5b9o.css';
import '../../css/i/i0hbfcbwy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="z86ro5b9o"/><path class="i0hbfcbwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:graph-arrow-user-increase"} {...others} />);
}

export default Component;
