import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aea866bch.css';
import '../../css/v/vbj9b3b9v.css';
import '../../css/k/kmkesyb1b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="aea866bch"/><path class="vbj9b3b9v"/><path class="kmkesyb1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:pisces"} {...others} />);
}

export default Component;
