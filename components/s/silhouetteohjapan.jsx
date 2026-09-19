import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qetnckbkp.css';
import '../../css/y/ya1w5kb7t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qetnckbkp"/><path class="ya1w5kb7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:silhouetteohjapan"} {...others} />);
}

export default Component;
