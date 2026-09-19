import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qlgozrxrt.css';
import '../../css/h/hztm1ryfl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qlgozrxrt"/><path class="hztm1ryfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:heart-square"} {...others} />);
}

export default Component;
