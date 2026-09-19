import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czhwh68px.css';
import '../../css/n/n4x3x3ysu.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="czhwh68px"/><path class="n4x3x3ysu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:watch-sharp"} {...others} />);
}

export default Component;
