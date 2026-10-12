import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x38ho_bxm.css';
import '../../css/q/qwa3owbzy.css';
import '../../css/u/uxd2kscsw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x38ho_bxm"/><path class="qwa3owbzy"/><path class="uxd2kscsw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:leaf-lightning"} {...others} />);
}

export default Component;
