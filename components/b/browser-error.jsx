import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/u/u3duj4btg.css';
import '../../css/n/n_9y8hjgn.css';
import '../../css/n/nghxz4u4e.css';
import '../../css/g/g9n8qkblw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="u3duj4btg"/><path class="n_9y8hjgn"/><path class="nghxz4u4e"/><path class="g9n8qkblw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:browser-error"} {...others} />);
}

export default Component;
