import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/o/o9jd0pibz.css';
import '../../css/l/lskd4ab3l.css';
import '../../css/d/dgoec6lpu.css';
import '../../css/y/ynscaskmd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="o9jd0pibz"/><path class="lskd4ab3l"/><path class="dgoec6lpu"/><path class="ynscaskmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:my-space-logo"} {...others} />);
}

export default Component;
