import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/akt-vlbtw.css';
import '../../css/l/lq07xlbfl.css';
import '../../css/h/hlva2pb_n.css';
import '../../css/e/ex_mzw_ak.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="akt-vlbtw"/><path class="lq07xlbfl"/><path class="hlva2pb_n"/><path class="ex_mzw_ak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:portable-solar-48-bold"} {...others} />);
}

export default Component;
