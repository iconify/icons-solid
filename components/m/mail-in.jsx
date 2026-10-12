import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u7vjzfbgj.css';
import '../../css/e/el_tm5ger.css';
import '../../css/v/v2v23kwih.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u7vjzfbgj"/><path class="el_tm5ger"/><path class="v2v23kwih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-in"} {...others} />);
}

export default Component;
