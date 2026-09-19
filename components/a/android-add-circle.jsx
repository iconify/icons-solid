import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzaqfr98w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pzaqfr98w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:android-add-circle"} {...others} />);
}

export default Component;
