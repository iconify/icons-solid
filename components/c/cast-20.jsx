import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rln3ffbom.css';
import '../../css/x/xxfcmckbc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rln3ffbom"/><path class="xxfcmckbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cast-20"} {...others} />);
}

export default Component;
