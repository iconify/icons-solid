import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/scyo_vb3w.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="scyo_vb3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:face-scan-1"} {...others} />);
}

export default Component;
