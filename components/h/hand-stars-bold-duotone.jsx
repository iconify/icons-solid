import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a7qi5pmcg.css';
import '../../css/e/ex62vvb2p.css';
import '../../css/s/smy-kq_2o.css';
import '../../css/z/z973ydbeg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a7qi5pmcg"/><path class="ex62vvb2p"/><path class="smy-kq_2o"/><path class="z973ydbeg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hand-stars-bold-duotone"} {...others} />);
}

export default Component;
