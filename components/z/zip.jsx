import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ffjwujvig.css';
import '../../css/t/t8gf8q6tr.css';
import '../../css/o/o5r41pbxp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ffjwujvig"/><path class="t8gf8q6tr"/><path class="o5r41pbxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:zip"} {...others} />);
}

export default Component;
