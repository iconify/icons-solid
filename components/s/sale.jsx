import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dgfq5ibji.css';
import '../../css/r/ra3wyebgx.css';
import '../../css/o/o51ywpkjy.css';
import '../../css/x/xtrpm4bxl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dgfq5ibji"/><path class="ra3wyebgx"/><circle class="o51ywpkjy"/><circle class="xtrpm4bxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sale"} {...others} />);
}

export default Component;
