import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjgbk469t.css';
import '../../css/p/pcn7t_b3w.css';
import '../../css/c/cdkh7bjct.css';
import '../../css/a/a6w2ebnxk.css';
import '../../css/s/skgtwgb_s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="sjgbk469t"/><circle class="pcn7t_b3w"/><circle class="cdkh7bjct"/><circle class="a6w2ebnxk"/><path class="skgtwgb_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-hyper-protect-dbaas"} {...others} />);
}

export default Component;
