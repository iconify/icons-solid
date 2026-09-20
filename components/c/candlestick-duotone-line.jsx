import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qmlj2lb5v.css';
import '../../css/g/gr4fk-o4v.css';
import '../../css/l/lhbek8bmf.css';
import '../../css/d/dfj0h6-ug.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGKBLFQcQm"><g class="ft5dv1b6b"><path class="qmlj2lb5v"/><path class="gr4fk-o4v"/><path class="lhbek8bmf"/><path class="dfj0h6-ug"/></g></mask></defs><path mask="url(#SVGKBLFQcQm)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:candlestick-duotone-line"} {...others} />);
}

export default Component;
