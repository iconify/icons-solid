import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h-iibybxn.css';
import '../../css/d/ds9w0vb9y.css';
import '../../css/j/j3w4wtb8s.css';
import '../../css/t/tlo-jjbpp.css';
import '../../css/v/v4vn82c9w.css';
import '../../css/v/vm0m_fbea.css';
import '../../css/k/ksrfkachz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h-iibybxn wm-k"/><path class="ds9w0vb9y wm-k"/><path class="j3w4wtb8s wm-k"/><path class="tlo-jjbpp wm-k"/><path class="v4vn82c9w wm-shine"/><path class="vm0m_fbea wm-k"/><path class="ksrfkachz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:sandwich"} {...others} />);
}

export default Component;
