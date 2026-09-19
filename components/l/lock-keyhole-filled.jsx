import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lntrp4opm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lntrp4opm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:lock-keyhole-filled"} {...others} />);
}

export default Component;
