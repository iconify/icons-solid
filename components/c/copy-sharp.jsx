import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jhwkk-pks.css';
import '../../css/s/spak13bjn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jhwkk-pks"/><path class="spak13bjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:copy-sharp"} {...others} />);
}

export default Component;
