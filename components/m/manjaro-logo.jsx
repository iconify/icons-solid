import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/v/vb0u9xetu.css';
import '../../css/n/njl14_b_c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="vb0u9xetu"/><path class="njl14_b_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:manjaro-logo"} {...others} />);
}

export default Component;
