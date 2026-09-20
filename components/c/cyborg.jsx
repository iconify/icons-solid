import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/o/og7xrbchw.css';
import '../../css/i/ivan5vfkp.css';
import '../../css/v/vsjujdlqb.css';
import '../../css/r/rfec6fyit.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="og7xrbchw"/><path class="ivan5vfkp"/><path class="vsjujdlqb"/><path class="rfec6fyit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:cyborg"} {...others} />);
}

export default Component;
