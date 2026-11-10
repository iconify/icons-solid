import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j139cfbaq.css';
import '../../css/y/yavbssblw.css';
import '../../css/f/fkx8f7oxo.css';
import '../../css/k/kh-8qg60k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j139cfbaq"/><path class="yavbssblw"/><path clip-rule="evenodd" class="fkx8f7oxo"/><path class="kh-8qg60k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:field-edit"} {...others} />);
}

export default Component;
