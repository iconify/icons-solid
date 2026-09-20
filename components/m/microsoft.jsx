import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c97awnbuk.css';
import '../../css/j/jlqq20lvs.css';
import '../../css/y/yq2qxybxe.css';
import '../../css/r/rx_11zbpa.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="c97awnbuk"/><path class="jlqq20lvs"/><path class="yq2qxybxe"/><path class="rx_11zbpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:microsoft"} {...others} />);
}

export default Component;
