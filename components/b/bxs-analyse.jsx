import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aq0kaj1jn.css';
import '../../css/m/mrqza92yb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aq0kaj1jn"/><path class="mrqza92yb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-analyse"} {...others} />);
}

export default Component;
