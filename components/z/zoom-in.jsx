import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/am47zfead.css';
import '../../css/k/kzui9exaw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="am47zfead"/><path class="kzui9exaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:zoom-in"} {...others} />);
}

export default Component;
