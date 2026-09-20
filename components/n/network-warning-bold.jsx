import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xj7lf7-lu.css';
import '../../css/d/dt6i3k8yq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xj7lf7-lu"/><path class="dt6i3k8yq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:network-warning-bold"} {...others} />);
}

export default Component;
