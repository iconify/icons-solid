import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5t7ghb5y.css';
import '../../css/a/ahl_moh8l.css';
import '../../css/g/gvfq-iurq.css';
import '../../css/y/yfoxxnbix.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a5t7ghb5y"/><path class="ahl_moh8l"/><path class="gvfq-iurq"/><path class="yfoxxnbix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:offshore-hydrogen-20-bold"} {...others} />);
}

export default Component;
