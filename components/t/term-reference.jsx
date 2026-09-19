import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b78okletp.css';
import '../../css/k/kqpn_smxt.css';
import '../../css/h/h51kgcb1t.css';
import '../../css/e/epwb1jbad.css';
import '../../css/e/e7t_nqb1l.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="b78okletp"/><circle class="kqpn_smxt"/><circle class="h51kgcb1t"/><circle class="epwb1jbad"/><path class="e7t_nqb1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:term-reference"} {...others} />);
}

export default Component;
