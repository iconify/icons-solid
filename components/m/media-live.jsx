import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ebn63x7qu.css';
import '../../css/w/wrbt1_brp.css';
import '../../css/c/c_np0hcqm.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ebn63x7qu"/><path class="wrbt1_brp"/><path class="c_np0hcqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:media-live"} {...others} />);
}

export default Component;
