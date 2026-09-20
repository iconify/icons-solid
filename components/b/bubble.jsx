import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/q/qgctxwzlr.css';
import '../../css/o/ows_o8gdi.css';
import '../../css/q/qliqwmf6r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><circle class="qgctxwzlr"/><circle class="ows_o8gdi"/><circle class="qliqwmf6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:bubble"} {...others} />);
}

export default Component;
