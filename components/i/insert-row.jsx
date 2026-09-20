import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/i/ifbfr1bmn.css';
import '../../css/h/h0e8vlbsf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="ifbfr1bmn"/><path class="h0e8vlbsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:insert-row"} {...others} />);
}

export default Component;
