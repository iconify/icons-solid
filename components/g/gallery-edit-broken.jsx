import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lgbc9yk3h.css';
import '../../css/m/mnox2fhle.css';
import '../../css/q/qw59k8t0z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lgbc9yk3h"/><path class="mnox2fhle"/><path class="qw59k8t0z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gallery-edit-broken"} {...others} />);
}

export default Component;
