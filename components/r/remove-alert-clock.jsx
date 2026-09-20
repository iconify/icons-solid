import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/g/ggem6y4bi.css';
import '../../css/c/c8su1ehkj.css';
import '../../css/q/qaj-6bcqj.css';
import '../../css/k/k3xsyrn4b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="ggem6y4bi"/><path class="c8su1ehkj"/><path class="qaj-6bcqj"/><path class="k3xsyrn4b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:remove-alert-clock"} {...others} />);
}

export default Component;
