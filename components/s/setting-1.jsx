import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g-4h2902s.css';
import '../../css/v/vyj6x83we.css';
import '../../css/p/pf-cf9bdi.css';
import '../../css/h/hwe3wrb-a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="g-4h2902s"/><path class="vyj6x83we"/><path clip-rule="evenodd" class="pf-cf9bdi"/><path class="hwe3wrb-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:setting-1"} {...others} />);
}

export default Component;
