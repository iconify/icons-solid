import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqhhrj0le.css';
import '../../css/g/gt9eulz_o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qqhhrj0le"/><path class="gt9eulz_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:nut"} {...others} />);
}

export default Component;
