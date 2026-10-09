import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qeucaqz1x.css';
import '../../css/q/qexfecbci.css';
import '../../css/m/m_2yb9bfa.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qeucaqz1x"/><path class="qexfecbci"/><path class="m_2yb9bfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:workspace-48-bold"} {...others} />);
}

export default Component;
