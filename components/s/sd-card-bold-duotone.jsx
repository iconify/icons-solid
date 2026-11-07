import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z43p-_bzo.css';
import '../../css/t/tq_cotbup.css';
import '../../css/b/b-tgazyav.css';
import '../../css/q/qp7vvacem.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z43p-_bzo"/><path class="tq_cotbup"/><path class="b-tgazyav"/><path class="qp7vvacem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sd-card-bold-duotone"} {...others} />);
}

export default Component;
