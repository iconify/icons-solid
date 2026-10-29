import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tcqe92r3b.css';
import '../../css/a/ayqoymtng.css';
import '../../css/h/hyiv-xb_h.css';
import '../../css/q/qk9xa2v5m.css';
import '../../css/q/qu1k8b4di.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="tcqe92r3b"/><path class="ayqoymtng"/><path class="hyiv-xb_h"/><path class="qk9xa2v5m"/><path class="qu1k8b4di"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-woman-bob"} {...others} />);
}

export default Component;
