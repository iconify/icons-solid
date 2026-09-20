import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yn9zjzj1e.css';
import '../../css/m/m52u-s6oe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yn9zjzj1e"/><path class="m52u-s6oe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hammer-editor"} {...others} />);
}

export default Component;
