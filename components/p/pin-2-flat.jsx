import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zkzoohb2f.css';
import '../../css/a/ahe27yb-a.css';
import '../../css/l/ljjyvfqub.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="zkzoohb2f"/><path clip-rule="evenodd" class="ahe27yb-a"/><path clip-rule="evenodd" class="ljjyvfqub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:pin-2-flat"} {...others} />);
}

export default Component;
