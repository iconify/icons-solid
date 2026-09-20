import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/f/fgfh7-b1j.css';
import '../../css/l/ljd11pbnz.css';
import '../../css/n/n7h4onbjw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="fgfh7-b1j"/><path class="ljd11pbnz"/><path class="n7h4onbjw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:insert-top-left"} {...others} />);
}

export default Component;
