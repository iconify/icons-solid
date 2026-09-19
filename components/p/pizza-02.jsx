import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wwim7wbwn.css';
import '../../css/e/eay7wabqi.css';
import '../../css/x/xj1eo1kcv.css';
import '../../css/s/snk52kbzr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="wwim7wbwn"/><path class="eay7wabqi"/><path class="xj1eo1kcv"/><path class="snk52kbzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pizza-02"} {...others} />);
}

export default Component;
