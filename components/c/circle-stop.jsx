import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/g9n85nbft.css';
import '../../css/j/jm_9mjbzo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="g9n85nbft"/><path class="jm_9mjbzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:circle-stop"} {...others} />);
}

export default Component;
