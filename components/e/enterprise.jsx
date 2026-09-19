import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iif_9hzvg.css';
import '../../css/k/klfo1ab7t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iif_9hzvg"/><path class="klfo1ab7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:enterprise"} {...others} />);
}

export default Component;
