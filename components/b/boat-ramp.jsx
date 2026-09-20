import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5qcd1b-i.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="j5qcd1b-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:boat-ramp"} {...others} />);
}

export default Component;
