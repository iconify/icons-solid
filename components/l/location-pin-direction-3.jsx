import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/l/lbkrd-xal.css';
import '../../css/g/g5s-gbb2c.css';
import '../../css/z/znpcm8eop.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="lbkrd-xal"/><path class="g5s-gbb2c"/><path class="znpcm8eop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:location-pin-direction-3"} {...others} />);
}

export default Component;
