import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w2ulsp5ek.css';
import '../../css/v/vxm3ezfpe.css';
import '../../css/z/z6r-ddb-m.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="w2ulsp5ek"/><path class="vxm3ezfpe"/><path class="z6r-ddb-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:store-duo"} {...others} />);
}

export default Component;
