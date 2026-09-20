import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/escglxalp.css';
import '../../css/y/ypan3jdtt.css';
import '../../css/j/jqx_c2rwd.css';
import '../../css/g/g5i8c9m-b.css';
import '../../css/f/f03hiugdm.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="escglxalp"/><path class="ypan3jdtt"/><path class="jqx_c2rwd"/><path class="g5i8c9m-b"/><path class="f03hiugdm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:wallet"} {...others} />);
}

export default Component;
