import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1ns9rbyk.css';
import '../../css/a/as60m0h-n.css';
import '../../css/o/o_aledblo.css';
import '../../css/n/nuec0m2ph.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o1ns9rbyk"/><path class="as60m0h-n"/><path class="o_aledblo"/><path class="nuec0m2ph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:quantum-engine"} {...others} />);
}

export default Component;
