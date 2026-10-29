import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n6i2dlzoy.css';
import '../../css/i/ijrb1sb6l.css';
import '../../css/k/kgtx4pp6m.css';
import '../../css/q/qk9xa2v5m.css';
import '../../css/o/o4aao8btp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="n6i2dlzoy"/><path class="ijrb1sb6l"/><path class="kgtx4pp6m"/><path class="qk9xa2v5m"/><path class="o4aao8btp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-woman-braids"} {...others} />);
}

export default Component;
