import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv_hji6de.css';
import '../../css/e/e6boln91d.css';
import '../../css/o/o361r-6gv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pv_hji6de"/><path class="e6boln91d"/><path clip-rule="evenodd" class="o361r-6gv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:high-quality-bold-duotone"} {...others} />);
}

export default Component;
