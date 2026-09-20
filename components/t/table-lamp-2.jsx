import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h3-p54tvh.css';
import '../../css/r/rpwt9dlgx.css';
import '../../css/q/qhgn-cihs.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="h3-p54tvh"/><path class="rpwt9dlgx"/><path class="qhgn-cihs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:table-lamp-2"} {...others} />);
}

export default Component;
