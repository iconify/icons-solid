import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b7i2c-b3z.css';
import '../../css/x/xl-jlp1rp.css';
import '../../css/h/hq-5njbjh.css';
import '../../css/g/ga-ta5brg.css';
import '../../css/e/emxy-vbfp.css';
import '../../css/r/rnv8iibym.css';
import '../../css/s/sgbfa45ur.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="b7i2c-b3z"/><path class="xl-jlp1rp"/><path class="hq-5njbjh"/><path class="ga-ta5brg"/><path class="emxy-vbfp"/><path class="rnv8iibym"/><path class="sgbfa45ur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:boombox-line-duotone"} {...others} />);
}

export default Component;
