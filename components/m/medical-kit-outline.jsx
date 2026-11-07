import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k89onwb0c.css';
import '../../css/l/lr49xfj0d.css';
import '../../css/o/o4hc_dhel.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k89onwb0c"/><path clip-rule="evenodd" class="lr49xfj0d"/><path clip-rule="evenodd" class="o4hc_dhel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medical-kit-outline"} {...others} />);
}

export default Component;
