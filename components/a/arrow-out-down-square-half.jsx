import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/igt4slb-u.css';
import '../../css/r/rfo4zzbxe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="igt4slb-u"/><path class="rfo4zzbxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-out-down-square-half"} {...others} />);
}

export default Component;
