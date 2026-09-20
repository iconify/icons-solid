import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kzejkebtm.css';
import '../../css/k/kjmdvfbaw.css';
import '../../css/j/jxve6plzp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kzejkebtm"/><path class="kjmdvfbaw"/><path class="jxve6plzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:milkomeda-a1"} {...others} />);
}

export default Component;
