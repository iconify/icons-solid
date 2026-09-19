import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2uim_bve.css';
import '../../css/t/t4fyarb9e.css';
import '../../css/r/ravzi7blj.css';
import '../../css/b/b9_uigb7n.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="o2uim_bve"/><circle class="t4fyarb9e"/><circle class="ravzi7blj"/><path class="b9_uigb7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:circle-more"} {...others} />);
}

export default Component;
