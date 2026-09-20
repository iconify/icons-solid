import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/h/hp8sgubia.css';
import '../../css/b/bwrud_gar.css';
import '../../css/n/ng_sv4rnw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="hp8sgubia"/><path class="bwrud_gar"/><path class="ng_sv4rnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:hi-five-logo"} {...others} />);
}

export default Component;
