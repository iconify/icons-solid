import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gl1gjukeh.css';
import '../../css/l/lb9a9m3hx.css';
import '../../css/t/tnzmccv-b.css';
import '../../css/e/e_zpqsben.css';
import '../../css/o/o2d7u3woc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gl1gjukeh"/><rect transform="rotate(-90 8.13 22.33)" class="lb9a9m3hx"/><path class="tnzmccv-b"/><rect class="e_zpqsben"/><path class="o2d7u3woc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:box-parachute"} {...others} />);
}

export default Component;
