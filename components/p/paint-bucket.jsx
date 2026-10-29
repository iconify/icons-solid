import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/m6zg-8bxv.css';
import '../../css/i/ivklvrbbi.css';
import '../../css/m/my67gw8xu.css';
import '../../css/u/uepozi-kl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="m6zg-8bxv wm-k"/><path class="ivklvrbbi wm-s"/><path class="my67gw8xu"/><path class="uepozi-kl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:paint-bucket"} {...others} />);
}

export default Component;
