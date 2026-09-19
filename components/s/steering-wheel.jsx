import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_kst0bgv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b u_kst0bgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:steering-wheel"} {...others} />);
}

export default Component;
