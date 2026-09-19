import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xadmxrn2z.css';
import '../../css/t/to17vzthq.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="xadmxrn2z"/><path class="to17vzthq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:indent-increase-fill-12"} {...others} />);
}

export default Component;
