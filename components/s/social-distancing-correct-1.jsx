import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xr6lt4bch.css';
import '../../css/l/lzmkr4bin.css';
import '../../css/c/c_qsmmbtu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xr6lt4bch"/><path class="lzmkr4bin"/><path class="c_qsmmbtu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:social-distancing-correct-1"} {...others} />);
}

export default Component;
