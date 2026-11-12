import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ph--6ybee.css';
import '../../css/o/oemvvsbfu.css';
import '../../css/k/k8-noccie.css';
import '../../css/u/urkmcdwfb.css';
import '../../css/y/yz7raabqt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ph--6ybee"/><path class="oemvvsbfu"/><path class="k8-noccie"/><path class="urkmcdwfb"/><path class="yz7raabqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-excel-dark"} {...others} />);
}

export default Component;
