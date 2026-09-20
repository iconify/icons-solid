import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xhrvhjdxv.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="xhrvhjdxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:abseiling"} {...others} />);
}

export default Component;
