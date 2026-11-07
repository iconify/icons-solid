import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s1_uyh1sv.css';
import '../../css/g/g2kbevgvt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s1_uyh1sv"/><path class="g2kbevgvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:laptop-outline"} {...others} />);
}

export default Component;
