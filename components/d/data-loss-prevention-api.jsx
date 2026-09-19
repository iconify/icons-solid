import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9lzv5byl.css';
import '../../css/h/htbgbpjid.css';
import '../../css/q/q0k479yut.css';
import '../../css/h/hcp7labja.css';
import '../../css/o/oe18hgbhi.css';
import '../../css/z/zbywbqmlg.css';
import '../../css/p/pc330099d.css';
import '../../css/k/k8hzzsmtd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e9lzv5byl"/><path class="htbgbpjid"/><path class="q0k479yut"/><path class="hcp7labja"/><path class="oe18hgbhi"/><path class="zbywbqmlg"/><path class="pc330099d"/><path class="k8hzzsmtd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:data-loss-prevention-api"} {...others} />);
}

export default Component;
