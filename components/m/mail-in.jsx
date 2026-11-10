import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v2v23kwih.css';
import '../../css/t/t2-f2ebnu.css';
import '../../css/f/f9l91t2cl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v2v23kwih"/><path class="t2-f2ebnu"/><path class="f9l91t2cl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-in"} {...others} />);
}

export default Component;
