import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/b/bcc5t8bhf.css';
import '../../css/a/alwpoib_a.css';
import '../../css/b/bkssc_qsq.css';
import '../../css/l/lugto7dwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="bcc5t8bhf"/><path class="alwpoib_a"/><path class="bkssc_qsq"/><path class="lugto7dwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:search-bar"} {...others} />);
}

export default Component;
