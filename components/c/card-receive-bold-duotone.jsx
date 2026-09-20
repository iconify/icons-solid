import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/skh9duprn.css';
import '../../css/s/sqocwka7w.css';
import '../../css/w/wotaafb6p.css';
import '../../css/g/g2lch4bat.css';
import '../../css/o/o1cpgsbzo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="skh9duprn"/><path class="sqocwka7w"/><path class="wotaafb6p"/><path class="g2lch4bat"/><path class="o1cpgsbzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:card-receive-bold-duotone"} {...others} />);
}

export default Component;
