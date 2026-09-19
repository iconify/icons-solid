import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bnul7o5fb.css';
import '../../css/p/pr_1mzb5o.css';
import '../../css/l/lxli7kbnc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bnul7o5fb"/><circle class="pr_1mzb5o"/><path class="lxli7kbnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-hyper-protect-crypto-services"} {...others} />);
}

export default Component;
