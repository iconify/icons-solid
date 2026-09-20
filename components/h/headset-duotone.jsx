import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qf2opmbjc.css';
import '../../css/r/r2zxf_bti.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qf2opmbjc"/><path class="r2zxf_bti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:headset-duotone"} {...others} />);
}

export default Component;
