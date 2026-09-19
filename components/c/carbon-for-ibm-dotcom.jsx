import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gh_nadcab.css';
import '../../css/u/ub4d63l7m.css';
import '../../css/k/k43y_he5a.css';
import '../../css/k/kaisiyc_s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gh_nadcab"/><circle class="ub4d63l7m"/><circle class="k43y_he5a"/><path class="kaisiyc_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:carbon-for-ibm-dotcom"} {...others} />);
}

export default Component;
