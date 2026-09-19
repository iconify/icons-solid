import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kz2ov7bmp.css';
import '../../css/p/p12bzlbrl.css';
import '../../css/j/j24ii1bme.css';
import '../../css/b/bzre8l_um.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="kz2ov7bmp"/><path class="p12bzlbrl"/><path class="j24ii1bme"/><path class="bzre8l_um"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:vsphere-wordmark"} {...others} />);
}

export default Component;
