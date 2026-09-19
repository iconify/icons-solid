import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvqm_db9h.css';
import '../../css/h/hd2zslizq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cvqm_db9h"/><path class="hd2zslizq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:openfilefolder"} {...others} />);
}

export default Component;
