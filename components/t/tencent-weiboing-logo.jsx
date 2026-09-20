import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/d/dffxk9bmb.css';
import '../../css/u/u5p8o2bwt.css';
import '../../css/d/dlasa7b1r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="dffxk9bmb"/><path class="u5p8o2bwt"/><path class="dlasa7b1r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:tencent-weiboing-logo"} {...others} />);
}

export default Component;
