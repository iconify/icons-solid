import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e101s5r6a.css';
import '../../css/q/qcwdnbbyu.css';
import '../../css/n/n8foidhcv.css';

const viewBox = {"width":720,"height":720};
const content = `<g class="ft5dv1b6b"><rect class="e101s5r6a"/><g clip-path="url(#SVGugIPLcHS)"><path class="qcwdnbbyu"/></g><defs><clipPath id="SVGugIPLcHS"><path class="n8foidhcv"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:pipedrive"} {...others} />);
}

export default Component;
