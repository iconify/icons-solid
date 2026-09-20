import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-tjpjsqk.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="e-tjpjsqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:health"} {...others} />);
}

export default Component;
