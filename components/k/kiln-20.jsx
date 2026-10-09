import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adb5y7bnp.css';
import '../../css/o/og-ht9b2j.css';
import '../../css/f/fqwob5ben.css';
import '../../css/d/dzbcu0b0a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="adb5y7bnp"/><path class="og-ht9b2j"/><path class="fqwob5ben"/><path class="dzbcu0b0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:kiln-20"} {...others} />);
}

export default Component;
