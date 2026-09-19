import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k371edcsm.css';
import '../../css/a/acjllyibf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k371edcsm"/><path class="acjllyibf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:badge-info"} {...others} />);
}

export default Component;
