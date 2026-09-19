import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3kb4cgpl.css';
import '../../css/q/q1oo2lbjw.css';
import '../../css/h/hi30kmb4w.css';
import '../../css/r/r67uvtzmv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="r3kb4cgpl"><path class="q1oo2lbjw"/><path class="hi30kmb4w"/><path class="r67uvtzmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:printer-bold"} {...others} />);
}

export default Component;
