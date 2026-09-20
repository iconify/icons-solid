import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/h/h0086jb6j.css';
import '../../css/j/jelje5b3c.css';
import '../../css/m/mc88p7b3c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="h0086jb6j"/><path class="jelje5b3c"/><path class="mc88p7b3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:wine"} {...others} />);
}

export default Component;
