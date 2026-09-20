import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/b/b7mrxw8pe.css';
import '../../css/c/cvm2rl1cd.css';
import '../../css/k/kjqtpnbjq.css';
import '../../css/f/fhobzotxz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="b7mrxw8pe"/><path class="cvm2rl1cd"/><path class="kjqtpnbjq"/><path class="fhobzotxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:database"} {...others} />);
}

export default Component;
