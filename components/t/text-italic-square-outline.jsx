import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hiqdz-8ts.css';
import '../../css/t/t5k-_f5ou.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hiqdz-8ts"/><path clip-rule="evenodd" class="t5k-_f5ou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-italic-square-outline"} {...others} />);
}

export default Component;
