import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qq9167bja.css';
import '../../css/m/m744oxfrh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qq9167bja"/><path class="m744oxfrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:kerbside-charger-20"} {...others} />);
}

export default Component;
