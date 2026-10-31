import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co62ijjon.css';
import '../../css/h/hi9v26vxg.css';
import '../../css/y/ytq7rbb5w.css';
import '../../css/k/kkc6ecc9w.css';
import '../../css/o/oc1pqs60w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="co62ijjon"/><path class="hi9v26vxg"/><path clip-rule="evenodd" class="ytq7rbb5w"/><path clip-rule="evenodd" class="kkc6ecc9w"/><path clip-rule="evenodd" class="oc1pqs60w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:rainbow-pop"} {...others} />);
}

export default Component;
