import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vrma3-btr.css';
import '../../css/g/gbu8bnozw.css';
import '../../css/k/kc4n-cwqf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="vrma3-btr"/><path class="gbu8bnozw"/><path class="kc4n-cwqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:cloud-data-transfer"} {...others} />);
}

export default Component;
