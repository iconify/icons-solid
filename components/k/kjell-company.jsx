import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zwvob5sdf.css';
import '../../css/m/m23pw1bjl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zwvob5sdf"/><path class="m23pw1bjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kjell-company"} {...others} />);
}

export default Component;
