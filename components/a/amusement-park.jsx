import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz9x4_4-o.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="oz9x4_4-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:amusement-park"} {...others} />);
}

export default Component;
