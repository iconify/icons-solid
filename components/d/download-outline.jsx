import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpgikrbsr.css';
import '../../css/g/glc-ykbgi.css';
import '../../css/o/oehlnsb9i.css';
import '../../css/v/viqlb4bup.css';
import '../../css/w/woc15gb3w.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="lpgikrbsr"/><rect transform="rotate(-90 5 18)" class="glc-ykbgi"/><rect transform="rotate(-90 19 18)" class="oehlnsb9i"/><path class="viqlb4bup"/><path class="woc15gb3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:download-outline"} {...others} />);
}

export default Component;
