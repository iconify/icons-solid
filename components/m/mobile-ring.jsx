import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsw-bb_vv.css';
import '../../css/l/lv1nsoira.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qsw-bb_vv"/><path class="lv1nsoira"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:mobile-ring"} {...others} />);
}

export default Component;
