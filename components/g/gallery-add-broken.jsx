import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lgbc9yk3h.css';
import '../../css/t/tcw2d1t9y.css';
import '../../css/q/qw59k8t0z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lgbc9yk3h"/><path class="tcw2d1t9y"/><path class="qw59k8t0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gallery-add-broken"} {...others} />);
}

export default Component;
