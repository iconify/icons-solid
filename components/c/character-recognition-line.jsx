import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_h2e2boc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k_h2e2boc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:character-recognition-line"} {...others} />);
}

export default Component;
